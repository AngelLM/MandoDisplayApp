import React from 'react';
import { View, StyleSheet } from 'react-native';
// import previewStyles from '../styles/global';

const PreviewDisplay = (props) => {
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
        <>
                        {/* Top Leds */}
                        <View style={previewStyles.previewTopLedsContainer}>
                            <View style={[previewStyles.previewTopLed, lightState[0]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, lightState[1]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, lightState[2]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, lightState[3]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, lightState[4]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, lightState[5]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, lightState[6]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, lightState[7]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, lightState[8]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, lightState[9]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, lightState[10]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, lightState[11]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, lightState[12]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, lightState[13]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, lightState[14]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, lightState[15]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, lightState[16]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, lightState[17]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, lightState[18]? styles.ledOn : styles.ledOff]}/>
                            <View style={[previewStyles.previewTopLed, lightState[19]? styles.ledOn : styles.ledOff]}/>
                        </View>
                        <View style={previewStyles.previewDigitDisplayContainer}>
                            {/* Display 8 Segm #1 */}
                            <View style={previewStyles.previewDigitDisplay}>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentA, lightState[20]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentB, lightState[21]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentC, lightState[22]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentD, lightState[23]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentE, lightState[24]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentF, lightState[25]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentG, lightState[26]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewPointLed, previewStyles.previewSegmentP, lightState[27]? styles.ledOn : styles.ledOff]}/>
                            </View>
                            {/* Display 8 Segm #2 */}
                            <View style={previewStyles.previewDigitDisplay}>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentA, lightState[28]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentB, lightState[29]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentC, lightState[30]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentD, lightState[31]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentE, lightState[32]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentF, lightState[33]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentG, lightState[34]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewPointLed, previewStyles.previewSegmentP, lightState[35]? styles.ledOn : styles.ledOff]}/>
                            </View>
                            {/* Display 8 Segm #3 */}
                            <View style={previewStyles.previewDigitDisplay}>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentA, lightState[36]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentB, lightState[37]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentC, lightState[38]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentD, lightState[39]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentE, lightState[40]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentF, lightState[41]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentG, lightState[42]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewPointLed, previewStyles.previewSegmentP, lightState[43]? styles.ledOn : styles.ledOff]}/>
                            </View>
                            {/* Display 8 Segm #4 */}
                            <View style={previewStyles.previewDigitDisplay}>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentA, lightState[44]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentB, lightState[45]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentC, lightState[46]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentD, lightState[47]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentE, lightState[48]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentF, lightState[49]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentG, lightState[50]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewPointLed, previewStyles.previewSegmentP, lightState[51]? styles.ledOn : styles.ledOff]}/>
                            </View>
                            {/* Display 8 Segm #5 */}
                            <View style={previewStyles.previewDigitDisplay}>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentA, lightState[52]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentB, lightState[53]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentC, lightState[54]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentD, lightState[55]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentE, lightState[56]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewVerticalLed, previewStyles.previewSegmentF, lightState[57]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewHorizontalLed, previewStyles.previewSegmentG, lightState[58]? styles.ledOn : styles.ledOff]}/>
                                <View style={[previewStyles.previewPointLed, previewStyles.previewSegmentP, lightState[59]? styles.ledOn : styles.ledOff]}/>
                            </View>
                        </View>
        </>
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

export default PreviewDisplay;