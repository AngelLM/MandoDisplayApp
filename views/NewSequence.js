import React, { useState } from 'react';
import { View } from 'react-native';
import { Container, Button, Text, H1, Form, Item, Input, Toast } from 'native-base';
import globalStyles from '../styles/global';

import { useNavigation } from '@react-navigation/native';
import shortid from 'shortid';

const NewSequence = ({route}) => {
    // Extracting the params sent via route
    const { sequences, setSequences, saveSequencesStorage } = route.params;
    
    // Navigation
    const navigation = useNavigation();

    // Setting up the state
    const [sequenceName, setSequenceName] = useState('');
    const [toastMessage, setToastMessage] = useState(null);

    const handleSubmit = () => {
        // Check if there is a name for the new sequence
        if (sequenceName.trim() === ''){
            setToastMessage('Sequence name is required');

            setTimeout(() => {
                setToastMessage(null);
            }, 3000);

            return;
        }

        // Create a new sequence with some initial parameters
        const lightSequences = [];
        const colorSequence = '#ff0000';
        const sequence = { sequenceName, colorSequence, lightSequences };
        sequence.id = shortid.generate();
        
        // Add the sequence to the state
        const sequenceNew = [...sequences, sequence];
        setSequences(sequenceNew);

        // Save the sequence into the storage
        saveSequencesStorage(JSON.stringify(sequenceNew));

        // Send toast message
        setToastMessage('New sequence successfully created');

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
            <H1 style={globalStyles.subtitle}>Create New Display Sequence</H1>
            <View style={globalStyles.content}>
                <Form style={{marginTop: 20}}>
                    <Item inlineLabel last style={globalStyles.input}>
                        <Input
                            placeholder="Sequence Name"
                            onChangeText={text => setSequenceName(text)}
                        />
                    </Item>
                    <Button
                        style={globalStyles.button}
                        block
                        square
                        onPress={() => handleSubmit()}    
                    >
                        <Text style={globalStyles.buttonText}>Create</Text>
                    </Button>
                </Form>
            </View>
            {toastMessage && showToast()}
        </Container>
     );
}
 
export default NewSequence;