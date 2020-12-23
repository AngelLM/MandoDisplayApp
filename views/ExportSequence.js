import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Container, Button, Text, Form, Item, Input, Toast } from 'native-base';
import globalStyles from '../styles/global';
import Clipboard from '@react-native-community/clipboard';

import { useNavigation } from '@react-navigation/native';

const ExportSequence = ({route}) => {
    // Extracting the params sent via route
    const { sequence } = route.params;

    // Setting up the state
    const [toastMessage, setToastMessage] = useState(null);
    const [sequenceCode, setSequenceCode] = useState("");

    
    useEffect(() => {
        var code = "";
        code+="MCD/";
        code+=sequence.sequenceName;
        code+="/";
        code+=sequence.colorSequence;
        code+="/";
        for (const seq of sequence.lightSequences){
            for (const state of seq.lightState){
                if (state){
                    code+="1";
                } else {
                    code+="0";
                }
            }
            code+="/";
            code+=seq.duration;
            code+="/";
        }
        code+="MCD";
        setSequenceCode(code);
    }, []);

    // Navigation
    const navigation = useNavigation();

    

    const handleSubmit = () => {
        Clipboard.setString(sequenceCode)
        setToastMessage('Sequence code copied to clipboard!');
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
                                value={sequenceCode}
                                onChangeText={text => setSequenceCode(text)}
                            />
                        </Item>
                        <Button
                            style={globalStyles.button}
                            block
                            square
                            onPress={() => handleSubmit()}    
                        >
                            <Text style={globalStyles.buttonText}>Copy to clipboard</Text>
                        </Button>
                    </Form>
                </View>
                {toastMessage && showToast()}
            </View>
        </Container>
     );
}
 
export default ExportSequence;