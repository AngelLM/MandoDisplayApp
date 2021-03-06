import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Container, Text, Content, Button, Card, CardItem, Input } from 'native-base';
import globalStyles from '../styles/global';

import { useNavigation } from '@react-navigation/native';

import SmallDisplay from '../components/SmallDisplay';

import AddStateButton from '../components/ui/AddStateButton';
import ColorButton from '../components/ui/ColorButton';
import ExportButton from '../components/ui/ExportButton';



const Sequence = ({route}) => {
    // Extracting the params sent via route
    const { sequences, seq, setSequences, saveSequencesStorage } = route.params;

    // State
    const [editSequences, setEditSequences] = useState([]); 

    useEffect(() => {
        let seqCopies = JSON.parse(JSON.stringify(sequences));
        setEditSequences(seqCopies);
    }, [route.params])

    const iSeq = sequences.findIndex(s => s.id === seq.id);

    // Navigation
    const navigation = useNavigation();
    navigation.setOptions({
            headerRight: () =>  <View style={{flexDirection:'row'}}>
                                    <ExportButton
                                      sequence = {sequences[iSeq]}
                                    />
                                    <ColorButton
                                        sequences={editSequences}
                                        seqId={seq.id}
                                        setSequences={setSequences}
                                        saveSequencesStorage={saveSequencesStorage}
                                    />
                                    <AddStateButton
                                        sequences={editSequences}
                                        seq={seq}
                                        setSequences={setSequences}
                                        saveSequencesStorage={saveSequencesStorage}
                                        stateIndex={-1}
                                    />
                                </View>,
                        })

    // Write the new duration
    const writeNewDuration = (duration, durIndex) => {
        // Copy the sequences array and find the index for the current sequence that it is being edited
        let seqNew = JSON.parse(JSON.stringify(editSequences));
        let indexSeq = seqNew.findIndex(s => s.id === seq.id);

        // Edit the copied array to add the light states to the current sequence
        seqNew[indexSeq].lightSequences[durIndex].duration = parseInt(duration);

        // Set the State
        setEditSequences(seqNew);
        setSequences(seqNew);
        
        // Save it into the storage
        saveSequencesStorage(JSON.stringify(seqNew));
    }

    // Delete Confirmation
    const deleteSequenceConfirmation = (seqId, stateIndex) => {
        Alert.alert(
            `Are you sure you want to delete this state?`,
            'Deleted states cannot be restored.',
            [
                {text: 'Delete', onPress: () => {deleteState(seqId, stateIndex)}},
                {text: 'Keep', style: 'cancel'}
            ]
        )
    }

    const deleteState = (seqId, stateIndex) => {
        // Copy the sequences array and find the index for the current sequence that it is being edited
        let seqNew = JSON.parse(JSON.stringify(sequences)); 
        let index = seqNew.findIndex(s => s.id === seqId);
        
        // Edit the copied array to modify the light states to the current sequence
        seqNew[index].lightSequences.splice(stateIndex,1);
        // Set the State
        setSequences(seqNew);
        // Save it into the storage
        saveSequencesStorage(JSON.stringify(seqNew));
        // Navigate to the Sequence view
        navigation.navigate("Sequence", {sequences:seqNew, seq:seqNew[index], setSequences, saveSequencesStorage})
    }

    return ( 
            <Container style={globalStyles.container}>
                <Content style={globalStyles.content}>
                    {seq.lightSequences.length === 0 ? (
                        <Text style={globalStyles.text}>Start adding a new state!</Text>
                    ) : (null)}
                    
                    <View style={{alignItems:'center'}}>
                        {seq.lightSequences.map((ligSeq, index) => (
                            <View style={{flexDirection: 'row'}}>
                                <SmallDisplay lightSequence={ligSeq} colorSequence={seq.colorSequence}/>
                                <Card style={globalStyles.durationCard}>
                                    <CardItem bordered>
                                    <View style={{flex:1, justifyContent:"center", flexDirection:'row'}}>
                                                <Button
                                                    style={styles.editButton}
                                                    onPress={() => navigation.navigate('State', { sequences, seqId:seq.id, state:ligSeq, setSequences, saveSequencesStorage, stateIndex:index })}
                                                >
                                                    <Text style={styles.textButton}>
                                                        Edit State
                                                    </Text>
                                                </Button>
                                                <Button
                                                    style={styles.deleteButton}
                                                    onPress={() => deleteSequenceConfirmation(seq.id, index)}
                                                >
                                                    <Text style={styles.textButton}>
                                                        Delete State
                                                    </Text>
                                                </Button>
                                        </View>
                                    </CardItem>
                                    <CardItem bordered>
                                        <View style={{flex:1, flexDirection:'row', justifyContent: 'center', alignItems:'center'}}>
                                                <Text>Duration: </Text>
                                                <Input
                                                    style={globalStyles.durationInput}
                                                    placeholder="Duration (ms)"
                                                    keyboardType="numeric"
                                                    defaultValue = {ligSeq.duration.toString()}
                                                    onChangeText={(text) => writeNewDuration(text,index)}
                                                />
                                                <Text> ms</Text>
                                        </View>
                                    </CardItem>
                                </Card>
                            </View> 
                         ))}
                    </View>

                </Content>
            </Container>
        );
}

const styles = StyleSheet.create({
    editButton:{
        backgroundColor: '#244a3b',
        marginHorizontal: 5
    },
    deleteButton:{
        backgroundColor: 'red',
        marginHorizontal: 5
    },
    textButton:{
        fontWeight: 'bold'
    }
});
 
export default Sequence;