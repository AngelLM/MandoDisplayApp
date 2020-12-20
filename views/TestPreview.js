import React from 'react';
import { View, StyleSheet, StatusBar, } from 'react-native';
import { Container } from 'native-base';
import { Svg, G, Polygon } from 'react-native-svg';

const TestPreview = ({route}) => {

    // Setting the fullscreen ON
    StatusBar.setHidden(true);

    // Extracting the params sent via route
    const {prevStyle} = route.params

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
            backgroundColor: 'red'
        },
        ledOff:{
            backgroundColor: 'black'
        },
    });
    return (
        <Container style={styles.containerPreview}>
                     <View style={styles.displayContainer}>
                         <View style={styles.topLedContainer}>
                             <View style={[styles.previewTopLed, styles.ledOn]}/>
                             <View style={[styles.previewTopLed, styles.ledOn]}/>
                             <View style={[styles.previewTopLed, styles.ledOn]}/>
                             <View style={[styles.previewTopLed, styles.ledOn]}/>
                             <View style={[styles.previewTopLed, styles.ledOn]}/>
                             <View style={[styles.previewTopLed, styles.ledOn]}/>
                             <View style={[styles.previewTopLed, styles.ledOn]}/>
                             <View style={[styles.previewTopLed, styles.ledOn]}/>
                             <View style={[styles.previewTopLed, styles.ledOn]}/>
                             <View style={[styles.previewTopLed, styles.ledOn]}/>
                             <View style={[styles.previewTopLed, styles.ledOn]}/>
                             <View style={[styles.previewTopLed, styles.ledOn]}/>
                             <View style={[styles.previewTopLed, styles.ledOn]}/>
                             <View style={[styles.previewTopLed, styles.ledOn]}/>
                             <View style={[styles.previewTopLed, styles.ledOn]}/>
                             <View style={[styles.previewTopLed, styles.ledOn]}/>
                             <View style={[styles.previewTopLed, styles.ledOn]}/>
                             <View style={[styles.previewTopLed, styles.ledOn]}/>
                             <View style={[styles.previewTopLed, styles.ledOn]}/>
                             <View style={[styles.previewTopLed, styles.ledOn]}/>
                         </View>

                        <View style={styles.displayLedContainer}>
                            <Svg width="74" height="122" viewBox="0 0 73 121" style={styles.scaled}> 
                                <G>
                                    <Polygon
                                        points="12,0  61,0  61,9  12,9"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="64,6  73,6  73,59  64,59"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="64,62  73,62  73,115  64,115"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="61,112  61,121  12,121  12,112"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="9,115  0,115  0,62  9,62"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="9,59  0,59  0,6  9,6"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="12,56 12,65 61,65 61,56"
                                        fill='red'
                                    />
                                </G>
                            </Svg>
                            <Svg width="74" height="122" viewBox="0 0 73 121" style={styles.scaled}> 
                                <G>
                                    <Polygon
                                        points="12,0  61,0  61,9  12,9"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="64,6  73,6  73,59  64,59"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="64,62  73,62  73,115  64,115"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="61,112  61,121  12,121  12,112"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="9,115  0,115  0,62  9,62"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="9,59  0,59  0,6  9,6"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="12,56 12,65 61,65 61,56"
                                        fill='red'
                                    />
                                </G>
                            </Svg>
                            <Svg width="74" height="122" viewBox="0 0 73 121" style={styles.scaled}> 
                                <G>
                                    <Polygon
                                        points="12,0  61,0  61,9  12,9"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="64,6  73,6  73,59  64,59"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="64,62  73,62  73,115  64,115"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="61,112  61,121  12,121  12,112"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="9,115  0,115  0,62  9,62"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="9,59  0,59  0,6  9,6"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="12,56 12,65 61,65 61,56"
                                        fill='red'
                                    />
                                </G>
                            </Svg>
                            <Svg width="74" height="122" viewBox="0 0 73 121" style={styles.scaled}> 
                                <G>
                                    <Polygon
                                        points="12,0  61,0  61,9  12,9"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="64,6  73,6  73,59  64,59"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="64,62  73,62  73,115  64,115"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="61,112  61,121  12,121  12,112"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="9,115  0,115  0,62  9,62"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="9,59  0,59  0,6  9,6"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="12,56 12,65 61,65 61,56"
                                        fill='red'
                                    />
                                </G>
                            </Svg>
                            <Svg width="74" height="122" viewBox="0 0 73 121" style={styles.scaled}> 
                                <G>
                                    <Polygon
                                        points="12,0  61,0  61,9  12,9"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="64,6  73,6  73,59  64,59"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="64,62  73,62  73,115  64,115"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="61,112  61,121  12,121  12,112"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="9,115  0,115  0,62  9,62"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="9,59  0,59  0,6  9,6"
                                        fill='red'
                                    />
                                    <Polygon
                                        points="12,56 12,65 61,65 61,56"
                                        fill='red'
                                    />
                                </G>
                            </Svg>
                     </View>
                </View>
        </Container>
     );
}

export default TestPreview;