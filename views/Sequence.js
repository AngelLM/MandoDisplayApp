import React, { useState, useEffect } from 'react';
import { Container, Text, Content, List, ListItem, Left, Fab, Icon } from 'native-base';
import globalStyles from '../styles/global';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Sequence = ({route}) => {
    // Extracting the params sent via route
    console.log(route);
    const { lightSequences } = route.params.seq;
    
    // Navigation
    const navigation = useNavigation();

    return ( 
            <Container style={globalStyles.container}>
                <Content style={globalStyles.content}>
                    {lightSequences.length === 0 ? (
                        <>
                            <Text style={globalStyles.text}>Start adding a new state by pressing the "+" button</Text>
                        </>
                    ) : null
                    }
                </Content>
            </Container>
        );
}
 
export default Sequence;