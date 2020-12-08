import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Container, Text, Content, List, ListItem, Left, Button, Icon, Footer, Card } from 'native-base';
import globalStyles from '../styles/global';

import { useNavigation } from '@react-navigation/native';

import LedButton from '../components/LedButton';

const State = ({route}) => {
    // Extracting the params sent via route
    // console.log(route);
    const { sequences, seqId, state, setSequences, saveSequencesStorage } = route.params;

    // Navigation
    const navigation = useNavigation();

    const setStateLights = (indx) => {
        state.lightState[indx] = !state.lightState[indx];
    }

    // Write the state
    const addState = () => {
        // Copy the sequences array and find the index for the current sequence that it is being edited
        let seqNew = [...sequences];
        let index = seqNew.findIndex(s => s.id === seqId);
        // Edit the copied array to add the light states to the current sequence
        seqNew[index] = {...seqNew[index], lightSequences: [...seqNew[index].lightSequences, state]};
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
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={state.lightState} setStateLights={setStateLights} id = '0' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={state.lightState} setStateLights={setStateLights} id = '1' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={state.lightState} setStateLights={setStateLights} id = '2' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={state.lightState} setStateLights={setStateLights} id = '3' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={state.lightState} setStateLights={setStateLights} id = '4' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={state.lightState} setStateLights={setStateLights} id = '5' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={state.lightState} setStateLights={setStateLights} id = '6' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={state.lightState} setStateLights={setStateLights} id = '7' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={state.lightState} setStateLights={setStateLights} id = '8' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={state.lightState} setStateLights={setStateLights} id = '9' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={state.lightState} setStateLights={setStateLights} id = '10' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={state.lightState} setStateLights={setStateLights} id = '11' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={state.lightState} setStateLights={setStateLights} id = '12' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={state.lightState} setStateLights={setStateLights} id = '13' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={state.lightState} setStateLights={setStateLights} id = '14' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={state.lightState} setStateLights={setStateLights} id = '15' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={state.lightState} setStateLights={setStateLights} id = '16' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={state.lightState} setStateLights={setStateLights} id = '17' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={state.lightState} setStateLights={setStateLights} id = '18' />
                            <LedButton buttonStyle={globalStyles.topLedButton} stateLights={state.lightState} setStateLights={setStateLights} id = '19' />
                        </View>

                        <View style={globalStyles.DigitDisplayContainer}>
                            {/* Display 8 Segm #1 */}
                            <View style={globalStyles.DigitDisplay}>
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentA ]} stateLights={state.lightState} setStateLights={setStateLights} id = '20' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentB ]} stateLights={state.lightState} setStateLights={setStateLights} id = '21' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentC ]} stateLights={state.lightState} setStateLights={setStateLights} id = '22' />
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentD ]} stateLights={state.lightState} setStateLights={setStateLights} id = '23' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentE ]} stateLights={state.lightState} setStateLights={setStateLights} id = '24' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentF ]} stateLights={state.lightState} setStateLights={setStateLights} id = '25' />
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentG ]} stateLights={state.lightState} setStateLights={setStateLights} id = '26' />
                                <LedButton buttonStyle={[globalStyles.pointLedButton, globalStyles.segmentP ]} stateLights={state.lightState} setStateLights={setStateLights} id = '27' />
                            </View>
                            {/* Display 8 Segm #2 */}
                            <View style={globalStyles.DigitDisplay}>
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentA ]} stateLights={state.lightState} setStateLights={setStateLights} id = '28' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentB ]} stateLights={state.lightState} setStateLights={setStateLights} id = '29' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentC ]} stateLights={state.lightState} setStateLights={setStateLights} id = '30' />
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentD ]} stateLights={state.lightState} setStateLights={setStateLights} id = '31' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentE ]} stateLights={state.lightState} setStateLights={setStateLights} id = '32' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentF ]} stateLights={state.lightState} setStateLights={setStateLights} id = '33' />
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentG ]} stateLights={state.lightState} setStateLights={setStateLights} id = '34' />
                                <LedButton buttonStyle={[globalStyles.pointLedButton, globalStyles.segmentP ]} stateLights={state.lightState} setStateLights={setStateLights} id = '35' />
                            </View>
                            {/* Display 8 Segm #3 */}
                            <View style={globalStyles.DigitDisplay}>
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentA ]} stateLights={state.lightState} setStateLights={setStateLights} id = '36' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentB ]} stateLights={state.lightState} setStateLights={setStateLights} id = '37' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentC ]} stateLights={state.lightState} setStateLights={setStateLights} id = '38' />
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentD ]} stateLights={state.lightState} setStateLights={setStateLights} id = '39' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentE ]} stateLights={state.lightState} setStateLights={setStateLights} id = '40' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentF ]} stateLights={state.lightState} setStateLights={setStateLights} id = '41' />
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentG ]} stateLights={state.lightState} setStateLights={setStateLights} id = '42' />
                                <LedButton buttonStyle={[globalStyles.pointLedButton, globalStyles.segmentP ]} stateLights={state.lightState} setStateLights={setStateLights} id = '43' />
                            </View>
                            {/* Display 8 Segm #4 */}
                            <View style={globalStyles.DigitDisplay}>
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentA ]} stateLights={state.lightState} setStateLights={setStateLights} id = '44' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentB ]} stateLights={state.lightState} setStateLights={setStateLights} id = '45' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentC ]} stateLights={state.lightState} setStateLights={setStateLights} id = '46' />
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentD ]} stateLights={state.lightState} setStateLights={setStateLights} id = '47' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentE ]} stateLights={state.lightState} setStateLights={setStateLights} id = '48' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentF ]} stateLights={state.lightState} setStateLights={setStateLights} id = '49' />
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentG ]} stateLights={state.lightState} setStateLights={setStateLights} id = '50' />
                                <LedButton buttonStyle={[globalStyles.pointLedButton, globalStyles.segmentP ]} stateLights={state.lightState} setStateLights={setStateLights} id = '51' />
                            </View>
                            {/* Display 8 Segm #5 */}
                            <View style={globalStyles.DigitDisplay}>
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentA ]} stateLights={state.lightState} setStateLights={setStateLights} id = '52' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentB ]} stateLights={state.lightState} setStateLights={setStateLights} id = '53' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentC ]} stateLights={state.lightState} setStateLights={setStateLights} id = '54' />
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentD ]} stateLights={state.lightState} setStateLights={setStateLights} id = '55' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentE ]} stateLights={state.lightState} setStateLights={setStateLights} id = '56' />
                                <LedButton buttonStyle={[globalStyles.verticalLedButton, globalStyles.segmentF ]} stateLights={state.lightState} setStateLights={setStateLights} id = '57' />
                                <LedButton buttonStyle={[globalStyles.horizontalLedButton, globalStyles.segmentG ]} stateLights={state.lightState} setStateLights={setStateLights} id = '58' />
                                <LedButton buttonStyle={[globalStyles.pointLedButton, globalStyles.segmentP ]} stateLights={state.lightState} setStateLights={setStateLights} id = '59' />
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
                    <Button 
                        style={[globalStyles.button, {marginHorizontal:20}]}
                        block
                        square
                        onPress={() => addState()}
                    >
                        <Text style={globalStyles.buttonText}>Add State</Text>
                    </Button>
                </Footer> 
            </Container>
        );
}
 
export default State;