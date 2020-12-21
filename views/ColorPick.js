import React, { useState, useEffect } from 'react';
import { View, Text }  from 'react-native';
import { Container, Button } from 'native-base';
import { ColorPicker, fromHsv } from 'react-native-color-picker';
import globalStyles from '../styles/global';
import { useNavigation } from '@react-navigation/native'

const ColorPick = ({route}) => {
    // Extracting the params sent via route
    const { sequences, seqId, setSequences, saveSequencesStorage } = route.params;
    let index = sequences.findIndex(s => s.id === seqId);

    const [colorStr, setColorStr] = useState(sequences[index].colorSequence);

    const navigation = useNavigation();

    const setColor = (sequences, seqId, setSequences, saveSequencesStorage) => {
        // Copy the sequences array and find the index for the current sequence that it is being edited
        let seqNew = JSON.parse(JSON.stringify(sequences)); //let seqNew = [...sequences];
        let index = seqNew.findIndex(s => s.id === seqId);
        // Edit the copied array to change the color
        seqNew[index].colorSequence = colorStr;

        // Set the State
        setSequences(seqNew);
        // Save it into the storage
        saveSequencesStorage(JSON.stringify(seqNew));
        // Navigate to the Sequence view
        navigation.navigate("Sequence", {sequences:seqNew, seq:seqNew[index], setSequences, saveSequencesStorage})
    };

    return (
        <Container style={globalStyles.container}>
            <View style={[globalStyles.contentSmall]}>
                <ColorPicker
                    defaultColor= {colorStr}
                    onColorChange={color => setColorStr(fromHsv(color))}
                    style={{flex: 0.9}}
                />
            <Button 
                block
                square
                style={[globalStyles.button, {marginTop: 10}]}
                onPress={ () => setColor(sequences, seqId, setSequences, saveSequencesStorage )}    
            >
                <Text style={globalStyles.buttonText}>SET COLOR</Text>
            </Button>
            </View>
        </Container>
    );
}

export default ColorPick;