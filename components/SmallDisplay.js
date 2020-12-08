import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Card } from 'native-base';
import globalStyles from '../styles/global';

const SmallDisplay = (props) => {
    // Extracting the params sent via props
    const { lightSequence } = props;
    const { lightState, duration } = lightSequence

    return ( 
        <Card style={globalStyles.smallLedBoard} >
                        {/* Top Leds */}
                        <View style={globalStyles.smallTopLedsContainer}>
                            <View style={[globalStyles.smallTopLed, lightState[0]? globalStyles.ledOn : globalStyles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[1]? globalStyles.ledOn : globalStyles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[2]? globalStyles.ledOn : globalStyles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[3]? globalStyles.ledOn : globalStyles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[4]? globalStyles.ledOn : globalStyles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[5]? globalStyles.ledOn : globalStyles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[6]? globalStyles.ledOn : globalStyles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[7]? globalStyles.ledOn : globalStyles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[8]? globalStyles.ledOn : globalStyles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[9]? globalStyles.ledOn : globalStyles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[10]? globalStyles.ledOn : globalStyles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[11]? globalStyles.ledOn : globalStyles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[12]? globalStyles.ledOn : globalStyles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[13]? globalStyles.ledOn : globalStyles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[14]? globalStyles.ledOn : globalStyles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[15]? globalStyles.ledOn : globalStyles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[16]? globalStyles.ledOn : globalStyles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[17]? globalStyles.ledOn : globalStyles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[18]? globalStyles.ledOn : globalStyles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[19]? globalStyles.ledOn : globalStyles.ledOff]}/>
                        </View>
                        <View style={globalStyles.smallDigitDisplayContainer}>
                            {/* Display 8 Segm #1 */}
                            <View style={globalStyles.smallDigitDisplay}>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentA, lightState[20]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentB, lightState[21]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentC, lightState[22]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentD, lightState[23]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentE, lightState[24]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentF, lightState[25]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentG, lightState[26]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallPointLed, globalStyles.smallSegmentP, lightState[27]? globalStyles.ledOn : globalStyles.ledOff]}/>
                            </View>
                            {/* Display 8 Segm #2 */}
                            <View style={globalStyles.smallDigitDisplay}>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentA, lightState[28]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentB, lightState[29]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentC, lightState[30]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentD, lightState[31]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentE, lightState[32]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentF, lightState[33]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentG, lightState[34]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallPointLed, globalStyles.smallSegmentP, lightState[35]? globalStyles.ledOn : globalStyles.ledOff]}/>
                            </View>
                            {/* Display 8 Segm #3 */}
                            <View style={globalStyles.smallDigitDisplay}>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentA, lightState[36]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentB, lightState[37]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentC, lightState[38]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentD, lightState[39]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentE, lightState[40]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentF, lightState[41]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentG, lightState[42]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallPointLed, globalStyles.smallSegmentP, lightState[43]? globalStyles.ledOn : globalStyles.ledOff]}/>
                            </View>
                            {/* Display 8 Segm #4 */}
                            <View style={globalStyles.smallDigitDisplay}>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentA, lightState[44]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentB, lightState[45]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentC, lightState[46]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentD, lightState[47]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentE, lightState[48]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentF, lightState[49]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentG, lightState[50]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallPointLed, globalStyles.smallSegmentP, lightState[51]? globalStyles.ledOn : globalStyles.ledOff]}/>
                            </View>
                            {/* Display 8 Segm #5 */}
                            <View style={globalStyles.smallDigitDisplay}>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentA, lightState[52]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentB, lightState[53]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentC, lightState[54]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentD, lightState[55]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentE, lightState[56]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentF, lightState[57]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentG, lightState[58]? globalStyles.ledOn : globalStyles.ledOff]}/>
                                <View style={[globalStyles.smallPointLed, globalStyles.smallSegmentP, lightState[59]? globalStyles.ledOn : globalStyles.ledOff]}/>
                            </View>
                        </View>
                    </Card>
     );
}
 
export default SmallDisplay;