import React, { useState, useEffect } from 'react';
import { Container, Text, Content, List, ListItem, Left, Button, Icon } from 'native-base';
import globalStyles from '../styles/global';

import { useNavigation } from '@react-navigation/native';

const Sequence = ({route}) => {
    // Extracting the params sent via route
    // console.log(route);
    const { sequences, seq, setSequences, saveSequencesStorage } = route.params;
    
    // Navigation
    const navigation = useNavigation();

    return ( 
            <Container style={globalStyles.container}>
                <Content style={globalStyles.content}>
                    {seq.lightSequences.length === 0 ? (
                        <>
                            <Text style={globalStyles.text}>Start adding a new state!</Text>
                        </>
                    ) : null
                    }
                    <Button 
                        style={globalStyles.button}
                        block
                        square
                        onPress={() => navigation.navigate('State', { sequences, seq, setSequences, saveSequencesStorage })}
                    >
                        <Text style={globalStyles.buttonText}>Add new State</Text>
                    </Button>
                </Content>
            </Container>
        );
}
 
export default Sequence;