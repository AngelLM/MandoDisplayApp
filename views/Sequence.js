import React, { useState, useEffect } from 'react';
import { Container, Text, Content, List, ListItem, Left, Button, Icon } from 'native-base';
import globalStyles from '../styles/global';

import { useNavigation } from '@react-navigation/native';

const Sequence = ({route}) => {
    // Extracting the params sent via route
    console.log(route.params);
    const { sequences, seq, setSequences, saveSequencesStorage } = route.params;
    
    // Create a new lightState full of false states (1 per led)
    var falseArray = new Array(60);
    for (var i = 0; i < falseArray.length; ++i) { falseArray[i] = false; }

    const newState = {
        lightState: falseArray,
        duration: 1000
    }

    // Navigation
    const navigation = useNavigation();

    return ( 
            <Container style={globalStyles.container}>
                <Content style={globalStyles.content}>
                    {seq.lightSequences.length === 0 ? (
                        <Text style={globalStyles.text}>Start adding a new state!</Text>
                    ) : (
                    <Text style={globalStyles.text}># Seq: {seq.lightSequences.length}</Text>
                    )
                    }
                    
                    <Button 
                        style={[globalStyles.button,{ marginTop: 20}]}
                        block
                        square
                        onPress={() => navigation.navigate('State', { sequences, seqId:seq.id, state:newState, setSequences, saveSequencesStorage })}
                    >
                        <Text 
                            style={globalStyles.buttonText}
                        >Add new State</Text>
                    </Button>
                </Content>
            </Container>
        );
}
 
export default Sequence;