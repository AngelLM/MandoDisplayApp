import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card } from 'native-base';
import globalStyles from '../styles/global';

const SmallDisplay = (props) => {
    // Extracting the params sent via props
    const { lightSequence, colorSequence } = props;
    const { lightState } = lightSequence

    const styles = StyleSheet.create({
        ledOn:{
            backgroundColor: colorSequence
        },
        ledOff:{
            backgroundColor: '#622f2f'
        }
    });

    return ( 
        <Card style={globalStyles.smallLedBoard} >
                        {/* Top Leds */}
                        <View style={globalStyles.smallTopLedsContainer}>
                            <View style={[globalStyles.smallTopLed, lightState[0]? styles.ledOn : styles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[1]? styles.ledOn : styles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[2]? styles.ledOn : styles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[3]? styles.ledOn : styles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[4]? styles.ledOn : styles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[5]? styles.ledOn : styles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[6]? styles.ledOn : styles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[7]? styles.ledOn : styles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[8]? styles.ledOn : styles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[9]? styles.ledOn : styles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[10]? styles.ledOn : styles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[11]? styles.ledOn : styles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[12]? styles.ledOn : styles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[13]? styles.ledOn : styles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[14]? styles.ledOn : styles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[15]? styles.ledOn : styles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[16]? styles.ledOn : styles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[17]? styles.ledOn : styles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[18]? styles.ledOn : styles.ledOff]}/>
                            <View style={[globalStyles.smallTopLed, lightState[19]? styles.ledOn : styles.ledOff]}/>
                        </View>
                        <View style={globalStyles.smallDigitDisplayContainer}>
                            {/* Display 8 Segm #1 */}
                            <View style={globalStyles.smallDigitDisplay}>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentA, lightState[20]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentB, lightState[21]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentC, lightState[22]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentD, lightState[23]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentE, lightState[24]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentF, lightState[25]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentG, lightState[26]? styles.ledOn : styles.ledOff]}/>
                                {/* <View style={[globalStyles.smallPointLed, globalStyles.smallSegmentP, lightState[27]? styles.ledOn : styles.ledOff]}/> */}
                            </View>
                            {/* Display 8 Segm #2 */}
                            <View style={globalStyles.smallDigitDisplay}>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentA, lightState[28]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentB, lightState[29]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentC, lightState[30]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentD, lightState[31]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentE, lightState[32]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentF, lightState[33]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentG, lightState[34]? styles.ledOn : styles.ledOff]}/>
                                {/* <View style={[globalStyles.smallPointLed, globalStyles.smallSegmentP, lightState[35]? styles.ledOn : styles.ledOff]}/> */}
                            </View>
                            {/* Display 8 Segm #3 */}
                            <View style={globalStyles.smallDigitDisplay}>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentA, lightState[36]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentB, lightState[37]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentC, lightState[38]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentD, lightState[39]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentE, lightState[40]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentF, lightState[41]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentG, lightState[42]? styles.ledOn : styles.ledOff]}/>
                                {/* <View style={[globalStyles.smallPointLed, globalStyles.smallSegmentP, lightState[43]? styles.ledOn : styles.ledOff]}/> */}
                            </View>
                            {/* Display 8 Segm #4 */}
                            <View style={globalStyles.smallDigitDisplay}>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentA, lightState[44]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentB, lightState[45]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentC, lightState[46]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentD, lightState[47]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentE, lightState[48]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentF, lightState[49]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentG, lightState[50]? styles.ledOn : styles.ledOff]}/>
                                {/* <View style={[globalStyles.smallPointLed, globalStyles.smallSegmentP, lightState[51]? styles.ledOn : styles.ledOff]}/> */}
                            </View>
                            {/* Display 8 Segm #5 */}
                            <View style={globalStyles.smallDigitDisplay}>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentA, lightState[52]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentB, lightState[53]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentC, lightState[54]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentD, lightState[55]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentE, lightState[56]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallVerticalLed, globalStyles.smallSegmentF, lightState[57]? styles.ledOn : styles.ledOff]}/>
                                <View style={[globalStyles.smallHorizontalLed, globalStyles.smallSegmentG, lightState[58]? styles.ledOn : styles.ledOff]}/>
                                {/* <View style={[globalStyles.smallPointLed, globalStyles.smallSegmentP, lightState[59]? styles.ledOn : styles.ledOff]}/> */}
                            </View>
                        </View>
                    </Card>
     );
}
 
export default SmallDisplay;