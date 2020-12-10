import React, { useEffect, useState } from 'react';
import { StyleSheet, Animated, View, Text } from 'react-native';
import { Container, Content, Button } from 'native-base';
import globalStyles from '../styles/global';

import SmallDisplay from '../components/SmallDisplay';


const Preview = ({route}) => {
    // Extracting the params sent via route
    const {colorSequence, lightSequences} = route.params.sequence;
    
    // Creating the array of duration
    const duration = [];
    lightSequences.map( state => {
        duration.push(state.duration);
    })
    duration.push(duration.shift());

    // Creating an state to change the state of the leds acording to the current sequence
    const [variable, setVariable] = useState({
                                        state: lightSequences[0], 
                                        index: 0
                                    });
    
    // Creating a timeout function to play the sequence
    setTimeout(() => {
        if (variable.index < (lightSequences.length - 1)){
            setVariable({
                state:lightSequences[variable.index+1],
                index:variable.index+1
            });
        }
        else{
            setVariable({
                state:lightSequences[0],
                index:0
            });
        }
    }, duration[variable.index]);

    return (
        <Container style={globalStyles.container}>
            <Content style={globalStyles.contentSmall}>
            <SmallDisplay lightSequence={variable.state} colorSequence={colorSequence}/>
            </Content>
        </Container>

    );
}


 
export default Preview;