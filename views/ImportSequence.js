import React, { useState } from 'react';
import { View } from 'react-native';
import { Container, Button, Text, Form, Item, Input, Toast } from 'native-base';
import globalStyles from '../styles/global';

import { useNavigation } from '@react-navigation/native';
import shortid from 'shortid';

const ImportSequence = ({route}) => {
    // Extracting the params sent via route
    const { sequences, setSequences, saveSequencesStorage } = route.params;

    // Navigation
    const navigation = useNavigation();

    // Setting up the state
    const [sequenceCode, setSequenceCode] = useState('');
    const [toastMessage, setToastMessage] = useState(null);

    const handleSubmit = () => {
        if (sequenceCode.trim() === ''){
            setToastMessage('Sequence code is required');
            setTimeout(() => {
                setToastMessage(null);
            }, 3000);
            return;
        }

        if (sequenceCode.length<60 || (sequenceCode.match(/MCD/g) || []).length!=2){
            setToastMessage('Sequence code invalid');
            setTimeout(() => {
                setToastMessage(null);
            }, 3000);
            return;
        }

        // Split the sequence
        const splitted = sequenceCode.split("/");
        // Remove first and last element (MCD)
        splitted.pop();
        splitted.shift();

        const sequenceName = splitted[0];
        const colorSequence = splitted[1];
        var lightSequences = [];

        var i;
        for (i = 2; i<splitted.length; i+=2){
            var lightState = [];
            const states = splitted[i].split("")
           
            for (const state of states){
                lightState.push(state==="1");
            }
            var duration = parseInt(splitted[i+1]);
            const item = {
                lightState,
                duration
            }
            lightSequences.push(item)
        }

        const sequence = { sequenceName, colorSequence, lightSequences };
        sequence.id = shortid.generate();

        // Add the sequence to the state
        const sequenceNew = [...sequences, sequence];
        setSequences(sequenceNew);

        // Save the sequence into the storage
        saveSequencesStorage(JSON.stringify(sequenceNew));

        // Send toast message
        setToastMessage('Sequence successfully imported');
        
        setTimeout(() => {
            setToastMessage(null);
        }, 3000);

        // Navigate to the Sequences view
        navigation.navigate("Sequences");
    }

    const showToast = () => {
        Toast.show({
            text: toastMessage,
            buttonText: 'OK',
            duration: 3000
        })
    }

    return ( 
        <Container style={globalStyles.container}>
            <View style={globalStyles.contentSmall}>
                <View style={globalStyles.content}>
                    <Form style={{marginTop: 20}}>
                        <Item inlineLabel last style={globalStyles.input}>
                            <Input
                                placeholder="Paste here the sequence code"
                                onChangeText={text => setSequenceCode(text)}
                            />
                        </Item>
                        <Button
                            style={globalStyles.button}
                            block
                            square
                            onPress={() => handleSubmit()}    
                        >
                            <Text style={globalStyles.buttonText}>Import</Text>
                        </Button>
                    </Form>
                </View>
                {toastMessage && showToast()}
            </View>
        </Container>
     );
}
 
export default ImportSequence;