import React, { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Container } from 'native-base';
import globalStyles from '../styles/global';
// import previewStyles from '../styles/global';

const Preview = ({route}) => {

    // Setting the fullscreen ON
    StatusBar.setHidden(true);

    // Extracting the params sent via route
    const {colorSequence, lightSequences} = route.params.sequence;

    const [previewState, setPreviewState] = useState({
                                            state: lightSequences[0],
                                            index: 0
                                            })

    const styles = StyleSheet.create({
        ledOn:{
            backgroundColor: colorSequence
        },
        ledOff:{
            backgroundColor: '#622f2f'
        }
    });

    // Creating the array of duration
    const duration = [];
    lightSequences.map( state => {
        duration.push(state.duration);
    })
    duration.push(duration.shift());

    // Creating a timeout function to play the sequence
    setTimeout(() => {
        if (previewState.index < (lightSequences.length - 1)){
            setPreviewState({
                state:lightSequences[previewState.index+1],
                index:previewState.index+1
            });
        }
        else{
            setPreviewState({
                state:lightSequences[0],
                index:0
            });
        }
    }, duration[previewState.index]);

    return (
        <Container style={globalStyles.containerPreview}>
                        {/* Top Leds */}
                        <View style={previewStyles.previewTopLedsContainer}>
                            <View style={[previewStyles.previewTopLed, previewState.state.lightState[0]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, previewState.state.lightState[1]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, previewState.state.lightState[2]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, previewState.state.lightState[3]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, previewState.state.lightState[4]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, previewState.state.lightState[5]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, previewState.state.lightState[6]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, previewState.state.lightState[7]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, previewState.state.lightState[8]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, previewState.state.lightState[9]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, previewState.state.lightState[10]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, previewState.state.lightState[11]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, previewState.state.lightState[12]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, previewState.state.lightState[13]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, previewState.state.lightState[14]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, previewState.state.lightState[15]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, previewState.state.lightState[16]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, previewState.state.lightState[17]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, previewState.state.lightState[18]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, previewState.state.lightState[19]? styles.ledOn : styles.ledOff]}/>
                        </View>
                        <View style={previewStyles.previewDigitDisplayContainer}>
                            {/* Display 8 Segm #1 */}
                            <View style={previewStyles.previewDigitDisplay}>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentA, previewState.state.lightState[20]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentB, previewState.state.lightState[21]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentC, previewState.state.lightState[22]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentD, previewState.state.lightState[23]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentE, previewState.state.lightState[24]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentF, previewState.state.lightState[25]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentG, previewState.state.lightState[26]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewPointLed, previewStyles.previewSegmentP, previewState.state.lightState[27]? styles.ledOn : styles.ledOff]}/>
                            </View>
                            {/* Display 8 Segm #2 */}
                            <View style={previewStyles.previewDigitDisplay}>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentA, previewState.state.lightState[28]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentB, previewState.state.lightState[29]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentC, previewState.state.lightState[30]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentD, previewState.state.lightState[31]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentE, previewState.state.lightState[32]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentF, previewState.state.lightState[33]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentG, previewState.state.lightState[34]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewPointLed, previewStyles.previewSegmentP, previewState.state.lightState[35]? styles.ledOn : styles.ledOff]}/>
                            </View>
                            {/* Display 8 Segm #3 */}
                            <View style={previewStyles.previewDigitDisplay}>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentA, previewState.state.lightState[36]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentB, previewState.state.lightState[37]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentC, previewState.state.lightState[38]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentD, previewState.state.lightState[39]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentE, previewState.state.lightState[40]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentF, previewState.state.lightState[41]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentG, previewState.state.lightState[42]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewPointLed, previewStyles.previewSegmentP, previewState.state.lightState[43]? styles.ledOn : styles.ledOff]}/>
                            </View>
                            {/* Display 8 Segm #4 */}
                            <View style={previewStyles.previewDigitDisplay}>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentA, previewState.state.lightState[44]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentB, previewState.state.lightState[45]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentC, previewState.state.lightState[46]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentD, previewState.state.lightState[47]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentE, previewState.state.lightState[48]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentF, previewState.state.lightState[49]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentG, previewState.state.lightState[50]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewPointLed, previewStyles.previewSegmentP, previewState.state.lightState[51]? styles.ledOn : styles.ledOff]}/>
                            </View>
                            {/* Display 8 Segm #5 */}
                            <View style={previewStyles.previewDigitDisplay}>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentA, previewState.state.lightState[52]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentB, previewState.state.lightState[53]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentC, previewState.state.lightState[54]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentD, previewState.state.lightState[55]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentE, previewState.state.lightState[56]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentF, previewState.state.lightState[57]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentG, previewState.state.lightState[58]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewPointLed, previewStyles.previewSegmentP, previewState.state.lightState[59]? styles.ledOn : styles.ledOff]}/>
                            </View>
                        </View>
        </Container>
     );
}
 
const previewStyles = StyleSheet.create({
    previewTopLedsContainer: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    previewTopLed:{
        height:20,
        width: 7,
        borderRadius:0,
        marginRight: 6.5
    },
    previewDigitDisplayContainer: {
        flexDirection: 'row',
    },
    previewDigitDisplay: {
        width: 41.5,
        height: 66,
        marginRight: 6.5,
        marginLeft: 6,
    },
    previewVerticalLed:{
        height:29,
        width:5,
        borderRadius:0,
        position: 'relative'
    },
    previewHorizontalLed:{
        height:5,
        width:25,
        borderRadius:0,
        position: 'relative'
    },
    previewPointLed:{
        height:5,
        width:5,
        borderRadius:0,
        position: 'relative'
    },
    previewSegmentA: {
        top: 0,
        left: 5.5,
    },
    previewSegmentB: {
        top: -3,
        left: 31.5,
    },
    previewSegmentC: {
        top: 0,
        left: 31.5,
    },
    previewSegmentD: {
        top: -2.5,
        left: 5.5,
    },
    previewSegmentE: {
        top: -35,
        left: -0.5,
    },
    previewSegmentF: {
        top: -96,
        left: -0.5,
    },
    previewSegmentG: {
        top: -96,
        left: 5.5,
    },
    previewSegmentP: {
        top: -72.5,
        left: 40,
    },
});

export default Preview;