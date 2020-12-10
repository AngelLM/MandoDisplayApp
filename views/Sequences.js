import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { Container, Text, Content, List, ListItem, Left, Right, Fab, Icon } from 'native-base';
import globalStyles from '../styles/global';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Sequences = () => {
    // State of sequences
    const [sequences, setSequences] = useState([]);

    // Using useEffect to update the state
    useEffect(() => {
        const obtainSequencesStorage = async () => {
            try {
                const sequencesStorage = await AsyncStorage.getItem('sequences');
                if (sequencesStorage){
                    setSequences(JSON.parse(sequencesStorage));
                }
            } catch (error) {
                console.log(error);
            }
        }
        obtainSequencesStorage();
    }, []);

    // Save sequences into the storage
    const saveSequencesStorage = async (sequencesJSON) => {
        try {
            await AsyncStorage.setItem('sequences', sequencesJSON);
            // console.log("Saved");
        } catch (error) {
            console.log(error);
        }
    }

    // Delete sequence from storage
    const deleteSequenceStorage = id => {
        // Filter all the sequences in the state to find the one with the id selected
        const filteredSequences = sequences.filter( seq => seq.id !== id);
        setSequences(filteredSequences);
        saveSequencesStorage(JSON.stringify(filteredSequences));
    }

    // Delete Confirmation
    const deleteSequenceConfirmation = (seq) => {
        const {id, sequenceName} = seq;
        Alert.alert(
            `Are you sure you want to delete the sequence ${sequenceName}?`,
            'Deleted sequences cannot be restored.',
            [
                {text: 'Delete', onPress: () => {deleteSequenceStorage(id)}},
                {text: 'Keep', style: 'cancel'}
            ]
        )
    }

    const navigation = useNavigation();

    return (
        <Container style={globalStyles.container}>
            {sequences.length === 0 ? (
                    <>
                        <Text style={globalStyles.text}>No sequences found</Text>
                        <Text style={[globalStyles.text, {fontWeight: 'bold'}]}>Start creating your own!</Text>
                    </>
                ) : (
                    // <>
                        <Text style={globalStyles.text}>Stored sequences: </Text>
                        // <Text style={[globalStyles.text, {fontWeight: 'bold', marginTop: 0}]}>Or create a new one!</Text>
                    // </>
                )
                }
            <Content style={globalStyles.contentSmall}>
                <List style={globalStyles.list}>
                    {sequences.map(seq => (
                        <ListItem 
                            key={seq.id}
                            onPress={() => navigation.navigate("Sequence", {sequences, seq, setSequences, saveSequencesStorage})}
                            onLongPress={() => deleteSequenceConfirmation(seq)}
                        >
                            <Left>
                                <Text>{seq.sequenceName}</Text>
                            </Left>
                            <Right>
                                <Icon 
                                    name='play-outline'
                                    style={{color:'#000'}}
                                    onPress={() => navigation.navigate('Preview', { sequence: seq })}
                                />
                            </Right>
                        </ListItem>

                    ))}
                </List>
            </Content>
            <Fab 
                style={globalStyles.fab}
                onPress={() => navigation.navigate("NewSequence", {sequences, setSequences, saveSequencesStorage})}
            >
                    <Icon name="add" style={{fontSize:30}} />
                </Fab>  
        </Container>
    );

}
 
export default Sequences;