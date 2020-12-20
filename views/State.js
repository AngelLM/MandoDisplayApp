import React from 'react';
import { View } from 'react-native';
import { Container, Text, Content, Button, Footer, Card } from 'native-base';
import globalStyles from '../styles/global';

import { useNavigation } from '@react-navigation/native';

import LedButton from '../components/LedButton';

const State = ({route}) => {
    // Extracting the params sent via route
    const { sequences, seqId, state, setSequences, saveSequencesStorage, stateIndex } = route.params;

    // Copy the state object
    let stateCpy = JSON.parse(JSON.stringify(state));
    // Navigation
    const navigation = useNavigation();

    const setStateLights = (indx) => {
        stateCpy.lightState[indx] = !stateCpy.lightState[indx];
    }

    // Extracting the colorSequence
    const ix = sequences.findIndex(s => s.id === seqId);
    const colorSequence = sequences[ix].colorSequence;


    // Write the state
    const addState = () => {
        // Copy the sequences array and find the index for the current sequence that it is being edited
        let seqNew = JSON.parse(JSON.stringify(sequences)); //let seqNew = [...sequences];
        let index = seqNew.findIndex(s => s.id === seqId);
        // Edit the copied array to add the light states to the current sequence
        seqNew[index] = {...seqNew[index], lightSequences: [...seqNew[index].lightSequences, stateCpy]};
        // Set the State
        setSequences(seqNew);
        // Save it into the storage
        saveSequencesStorage(JSON.stringify(seqNew));
        // Navigate to the Sequence view
        navigation.navigate("Sequence", {sequences:seqNew, seq:seqNew[index], setSequences, saveSequencesStorage})
    }

    // Go to the sequence view
    const editState = () => {
        // Copy the sequences array and find the index for the current sequence that it is being edited
        let seqNew = JSON.parse(JSON.stringify(sequences)); //let seqNew = [...sequences];
        let index = seqNew.findIndex(s => s.id === seqId);
        
        // Edit the copied array to modify the light states to the current sequence
        seqNew[index].lightSequences[stateIndex].lightState = stateCpy.lightState;
        // Set the State
        setSequences(seqNew);
        // Save it into the storage
        saveSequencesStorage(JSON.stringify(seqNew));
        // Navigate to the Sequence view
        navigation.navigate("Sequence", {sequences:seqNew, seq:seqNew[index], setSequences, saveSequencesStorage})
    }

    return ( 
            <Container style={globalStyles.container}>
                <Content style={globalStyles.content} contentContainerStyle={{alignItems:'center'}}>
                    {/* Led board */}
                    <Card style={globalStyles.ledBoard} >
                        {/* Top Leds */}
                        <View style={globalStyles.topLedsContainer}>
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '0' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '1' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '2' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '3' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '4' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '5' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '6' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '7' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '8' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '9' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '10' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '11' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '12' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '13' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '14' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '15' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '16' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '17' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '18' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '19' />
                        </View>

                        <View style={globalStyles.DigitDisplayContainer}>
                            {/* Display 8 Segm #1 */}
                            <View style={globalStyles.DigitDisplay}>
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentA ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '20' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentB ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '21' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentC ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '22' />
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentD ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '23' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentE ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '24' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentF ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '25' />
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentG ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '26' />
                                {/* <LedButton buttonStyle={[globalStyles.pointLedButton, globalStyles.segmentP ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '27' /> */}
                            </View>
                            {/* Display 8 Segm #2 */}
                            <View style={globalStyles.DigitDisplay}>
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentA ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '28' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentB ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '29' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentC ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '30' />
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentD ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '31' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentE ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '32' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentF ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '33' />
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentG ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '34' />
                                {/* <LedButton buttonStyle={[globalStyles.pointLedButton, globalStyles.segmentP ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '35' /> */}
                            </View>
                            {/* Display 8 Segm #3 */}
                            <View style={globalStyles.DigitDisplay}>
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentA ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '36' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentB ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '37' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentC ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '38' />
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentD ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '39' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentE ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '40' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentF ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '41' />
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentG ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '42' />
                                {/* <LedButton buttonStyle={[globalStyles.pointLedButton, globalStyles.segmentP ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '43' /> */}
                            </View>
                            {/* Display 8 Segm #4 */}
                            <View style={globalStyles.DigitDisplay}>
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentA ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '44' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentB ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '45' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentC ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '46' />
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentD ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '47' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentE ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '48' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentF ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '49' />
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentG ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '50' />
                                {/* <LedButton buttonStyle={[globalStyles.pointLedButton, globalStyles.segmentP ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '51' /> */}
                            </View>
                            {/* Display 8 Segm #5 */}
                            <View style={globalStyles.DigitDisplay}>
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentA ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '52' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentB ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '53' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentC ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '54' />
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentD ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '55' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentE ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '56' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentF ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '57' />
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentG ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '58' />
                                {/* <LedButton buttonStyle={[globalStyles.pointLedButton, globalStyles.segmentP ]} stateLights={stateCpy.lightState} setStateLights={setStateLights} colorSequence={colorSequence} id = '59' /> */}
                            </View>
                        </View>
                    </Card>
                
                </Content>
                <Footer style={globalStyles.footer}>
                    <Button 
                        style={[globalStyles.button, {marginHorizontal:20}]}
                        block
                        square
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={globalStyles.buttonText}>Back</Text>
                    </Button>
                    {stateIndex == -1 ? (
                        <Button 
                            style={[globalStyles.button, {marginHorizontal:20}]}
                            block
                            square
                            onPress={() => addState()}
                        >
                            <Text style={globalStyles.buttonText}>Add State</Text>
                        </Button>
                    ):(
                        <Button 
                            style={[globalStyles.button, {marginHorizontal:20}]}
                            block
                            square
                            onPress={() => editState()}
                        >
                            <Text style={globalStyles.buttonText}>Edit State</Text>
                        </Button>
                    )}
                    
                </Footer> 
            </Container>
        );
}
 
export default State;