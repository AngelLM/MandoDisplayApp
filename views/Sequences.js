import React, { useState, useEffect } from 'react';
import { Alert, BackHandler } from 'react-native';
import { Container, Text, Content, List, ListItem, Left, Right, Fab, View } from 'native-base';
import globalStyles from '../styles/global';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Octicon from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';

import SettingsButton from '../components/ui/SettingsButton';
import ImportButton from '../components/ui/ImportButton';

const Sequences = () => {

    // State of sequences
    const [sequences, setSequences] = useState([]);

    // State of the style
    const [prevStyle, setPrevStyle] = useState({
                                                leftMargin: 50,
                                                topMargin: 100,
                                                topLedMargin: 15,
                                                displayWidth: 527,
                                                topLedHeight: 40,
                                                topLedWidth: 14,
                                                segmentHeight: 122,
                                                segmentWidth: 74});

    // Using useEffect to update the states
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
        const obtainPrevStyleStorage = async () => {
            try {
                const prevStyleStorage = await AsyncStorage.getItem('prevStyle');
                if (prevStyleStorage){
                    setPrevStyle(JSON.parse(prevStyleStorage));
                }
            } catch (error) {
                console.log(error);
            }
        }
        obtainSequencesStorage();
        obtainPrevStyleStorage();
    }, []);

    // Save sequences into the storage
    const saveSequencesStorage = async (sequencesJSON) => {
        try {
            await AsyncStorage.setItem('sequences', sequencesJSON);
        } catch (error) {
            console.log(error);
        }
    }

    // Save styles into the storage
    const saveStyleStorage = async (stylesJSON) => {
        try {
            await AsyncStorage.setItem('prevStyle', stylesJSON);
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


    navigation.setOptions({
        headerRight: () =>  <View style={{flexDirection:'row'}}>
                                <ImportButton
                                      sequences={sequences}
                                      setSequences={setSequences}
                                      saveSequencesStorage={saveSequencesStorage}
                                />
                                <SettingsButton
                                      prevStyle={prevStyle}
                                      setPrevStyle={setPrevStyle}
                                      saveStyleStorage={saveStyleStorage}
                                />
                            </View>,
    })

    return (
        <Container style={globalStyles.container}>
            {sequences.length === 0 ? (
                    <>
                        <Text style={globalStyles.text}>No sequences found</Text>
                        <Text style={[globalStyles.text, {fontWeight: 'bold'}]}>Start creating your own!</Text>
                    </>
                ) : (
                    <Text style={globalStyles.text}>Stored sequences: </Text>
                )
                }
            <Content style={globalStyles.contentSmall}>
                <List style={globalStyles.list}>
                    {sequences.map(seq => (
                        <ListItem 
                            key={seq.id}
                            onLongPress={() => deleteSequenceConfirmation(seq)}
                        >
                            <Left>
                                <Text style={{fontSize: 18, fontWeight: 'bold'}}>{seq.sequenceName}</Text>
                            </Left>
                            <Right>
                                <View style={{flexDirection: 'row'}}>
                                    <Octicon 
                                        name='pencil'
                                        style={{fontSize: 26 , color:'#000'}}
                                        onPress={() => navigation.navigate("Sequence", {sequences, seq, setSequences, saveSequencesStorage})}
                                    /> 
                                    <Entypo
                                        name='controller-play'
                                        style={[{fontSize: 26 , marginLeft: 25}, seq.lightSequences.length > 0 ? {color:'#000'} : {color:'#7b7b7b'}]}
                                        onPress={() => seq.lightSequences.length > 0 ? navigation.navigate('Preview', { sequence: seq , prevStyle}) : null}
                                    />
                                </View>    
                            </Right>
                        </ListItem>

                    ))}
                </List>
            </Content>
            <Fab 
                style={globalStyles.fab}
                onPress={() => navigation.navigate("NewSequence", {sequences, setSequences, saveSequencesStorage})}
            >
                    <Octicon name="plus" style={{fontSize:30}} />
                </Fab>  
        </Container>
    );

}
 
export default Sequences;