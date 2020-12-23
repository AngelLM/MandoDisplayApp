import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, } from 'react-native';
import { Container } from 'native-base';
import { Svg, G, Polygon } from 'react-native-svg';

const Preview = ({route}) => {

    // Setting the fullscreen ON
    StatusBar.setHidden(true);

    // Extracting the params sent via route
    const {sequence, prevStyle} = route.params
    const {colorSequence, lightSequences} = sequence;

    const [previewState, setPreviewState] = useState({
                                            state: lightSequences[0],
                                            index: 0
                                            })

    const styles = StyleSheet.create({
        containerPreview:{
            flex: 1,
            backgroundColor: "black"
        },
        displayContainer:{
            width: prevStyle.displayWidth,
            marginLeft: prevStyle.leftMargin,
            marginTop: prevStyle.topMargin,
        },
        topLedContainer:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: prevStyle.topLedMargin
        },
        displayLedContainer: {
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        previewTopLed: {
            height: prevStyle.topLedHeight,
            width: prevStyle.topLedWidth,
            borderRadius: 0,
        },
        scaled: {
            transform: [
                { scaleX : prevStyle.segmentWidth/74 },
                { scaleY : prevStyle.segmentHeight/122 }, 
                { translateX: ((prevStyle.segmentWidth-74)/(prevStyle.segmentWidth/74))/2 },
                { translateY: ((prevStyle.segmentHeight-122)/(prevStyle.segmentHeight/122))/2 }
            ]
        },
        ledOn:{
            backgroundColor: colorSequence
        },
        ledOff:{
            backgroundColor: 'black'
        },
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
        <Container style={styles.containerPreview}>
                     <View style={styles.displayContainer}>
                         <View style={styles.topLedContainer}>
                             <View style={[styles.previewTopLed, previewState.state.lightState[0]? styles.ledOn : styles.ledOff]}/>
                             <View style={[styles.previewTopLed, previewState.state.lightState[1]? styles.ledOn : styles.ledOff]}/>
                             <View style={[styles.previewTopLed, previewState.state.lightState[2]? styles.ledOn : styles.ledOff]}/>
                             <View style={[styles.previewTopLed, previewState.state.lightState[3]? styles.ledOn : styles.ledOff]}/>
                             <View style={[styles.previewTopLed, previewState.state.lightState[4]? styles.ledOn : styles.ledOff]}/>
                             <View style={[styles.previewTopLed, previewState.state.lightState[5]? styles.ledOn : styles.ledOff]}/>
                             <View style={[styles.previewTopLed, previewState.state.lightState[6]? styles.ledOn : styles.ledOff]}/>
                             <View style={[styles.previewTopLed, previewState.state.lightState[7]? styles.ledOn : styles.ledOff]}/>
                             <View style={[styles.previewTopLed, previewState.state.lightState[8]? styles.ledOn : styles.ledOff]}/>
                             <View style={[styles.previewTopLed, previewState.state.lightState[9]? styles.ledOn : styles.ledOff]}/>
                             <View style={[styles.previewTopLed, previewState.state.lightState[10]? styles.ledOn : styles.ledOff]}/>
                             <View style={[styles.previewTopLed, previewState.state.lightState[11]? styles.ledOn : styles.ledOff]}/>
                             <View style={[styles.previewTopLed, previewState.state.lightState[12]? styles.ledOn : styles.ledOff]}/>
                             <View style={[styles.previewTopLed, previewState.state.lightState[13]? styles.ledOn : styles.ledOff]}/>
                             <View style={[styles.previewTopLed, previewState.state.lightState[14]? styles.ledOn : styles.ledOff]}/>
                             <View style={[styles.previewTopLed, previewState.state.lightState[15]? styles.ledOn : styles.ledOff]}/>
                             <View style={[styles.previewTopLed, previewState.state.lightState[16]? styles.ledOn : styles.ledOff]}/>
                             <View style={[styles.previewTopLed, previewState.state.lightState[17]? styles.ledOn : styles.ledOff]}/>
                             <View style={[styles.previewTopLed, previewState.state.lightState[18]? styles.ledOn : styles.ledOff]}/>
                             <View style={[styles.previewTopLed, previewState.state.lightState[19]? styles.ledOn : styles.ledOff]}/>
                         </View>

                        <View style={styles.displayLedContainer}>
                            <Svg width="74" height="122" viewBox="0 0 73 121" style={styles.scaled}> 
                                <G>
                                    <Polygon
                                        points="12,0  61,0  61,9  12,9"
                                        fill= {previewState.state.lightState[20]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="64,6  73,6  73,59  64,59"
                                        fill= {previewState.state.lightState[21]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="64,62  73,62  73,115  64,115"
                                        fill= {previewState.state.lightState[22]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="61,112  61,121  12,121  12,112"
                                        fill= {previewState.state.lightState[23]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="9,115  0,115  0,62  9,62"
                                        fill= {previewState.state.lightState[24]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="9,59  0,59  0,6  9,6"
                                        fill= {previewState.state.lightState[25]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="12,56 12,65 61,65 61,56"
                                        fill= {previewState.state.lightState[26]? colorSequence : 'black'}
                                    />
                                </G>
                            </Svg>
                            <Svg width="74" height="122" viewBox="0 0 73 121" style={styles.scaled}> 
                                <G>
                                    <Polygon
                                        points="12,0  61,0  61,9  12,9"
                                        fill= {previewState.state.lightState[28]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="64,6  73,6  73,59  64,59"
                                        fill= {previewState.state.lightState[29]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="64,62  73,62  73,115  64,115"
                                        fill= {previewState.state.lightState[30]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="61,112  61,121  12,121  12,112"
                                        fill= {previewState.state.lightState[31]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="9,115  0,115  0,62  9,62"
                                        fill= {previewState.state.lightState[32]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="9,59  0,59  0,6  9,6"
                                        fill= {previewState.state.lightState[33]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="12,56 12,65 61,65 61,56"
                                        fill= {previewState.state.lightState[34]? colorSequence : 'black'}
                                    />
                                </G>
                            </Svg>
                            <Svg width="74" height="122" viewBox="0 0 73 121" style={styles.scaled}> 
                                <G>
                                    <Polygon
                                        points="12,0  61,0  61,9  12,9"
                                        fill= {previewState.state.lightState[36]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="64,6  73,6  73,59  64,59"
                                        fill= {previewState.state.lightState[37]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="64,62  73,62  73,115  64,115"
                                        fill= {previewState.state.lightState[38]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="61,112  61,121  12,121  12,112"
                                        fill= {previewState.state.lightState[39]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="9,115  0,115  0,62  9,62"
                                        fill= {previewState.state.lightState[40]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="9,59  0,59  0,6  9,6"
                                        fill= {previewState.state.lightState[41]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="12,56 12,65 61,65 61,56"
                                        fill= {previewState.state.lightState[42]? colorSequence : 'black'}
                                    />
                                </G>
                            </Svg>
                            <Svg width="74" height="122" viewBox="0 0 73 121" style={styles.scaled}> 
                                <G>
                                    <Polygon
                                        points="12,0  61,0  61,9  12,9"
                                        fill= {previewState.state.lightState[44]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="64,6  73,6  73,59  64,59"
                                        fill= {previewState.state.lightState[45]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="64,62  73,62  73,115  64,115"
                                        fill= {previewState.state.lightState[46]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="61,112  61,121  12,121  12,112"
                                        fill= {previewState.state.lightState[47]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="9,115  0,115  0,62  9,62"
                                        fill= {previewState.state.lightState[48]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="9,59  0,59  0,6  9,6"
                                        fill= {previewState.state.lightState[49]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="12,56 12,65 61,65 61,56"
                                        fill= {previewState.state.lightState[50]? colorSequence : 'black'}
                                    />
                                </G>
                            </Svg>
                            <Svg width="74" height="122" viewBox="0 0 73 121" style={styles.scaled}> 
                                <G>
                                    <Polygon
                                        points="12,0  61,0  61,9  12,9"
                                        fill= {previewState.state.lightState[52]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="64,6  73,6  73,59  64,59"
                                        fill= {previewState.state.lightState[53]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="64,62  73,62  73,115  64,115"
                                        fill= {previewState.state.lightState[54]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="61,112  61,121  12,121  12,112"
                                        fill= {previewState.state.lightState[55]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="9,115  0,115  0,62  9,62"
                                        fill= {previewState.state.lightState[56]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="9,59  0,59  0,6  9,6"
                                        fill= {previewState.state.lightState[57]? colorSequence : 'black'}
                                    />
                                    <Polygon
                                        points="12,56 12,65 61,65 61,56"
                                        fill= {previewState.state.lightState[58]? colorSequence : 'black'}
                                    />
                                </G>
                            </Svg>
                     </View>
                </View>
        </Container>
     );
}

export default Preview;