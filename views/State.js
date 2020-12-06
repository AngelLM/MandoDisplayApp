import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Container, Text, Content, List, ListItem, Left, Button, Icon, Footer } from 'native-base';
import globalStyles from '../styles/global';

import { useNavigation } from '@react-navigation/native';

const State = ({route}) => {
    // Extracting the params sent via route
    console.log(route);
    
    // Navigation
    const navigation = useNavigation();

    const [state, setState] = useState(false);

    const cambiarEstado = () => {
        setState(!state);
        console.log(state);
    }

    return ( 
            <Container style={globalStyles.container}>
                <Content style={globalStyles.content}>
                    <Button 
                        style={{height:100, width: 100, backgroundColor: style.backgroundColor==='blue' ? 'red' : 'blue'}}
                        onPress={() => cambiarEstado()}
                    >
                    </Button>

                </Content>
                <Footer style={{backgroundColor: 'transparent', elevation: 0}}>
                    <Button 
                        style={globalStyles.button}
                        block
                        square
                    >
                        <Text style={globalStyles.buttonText}>Add State</Text>
                    </Button>
                </Footer> 
            </Container>
        );
}
 
export default State;