import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'native-base';

const LedButton = (props) => {
    // Extracting the params sent via props
    const { id, stateLights, setStateLights, buttonStyle, colorSequence } = props;

    const styles = StyleSheet.create({
        ledOn:{
            backgroundColor: colorSequence
        },
        ledOff:{
            backgroundColor: '#622f2f'
        }
    });

    useEffect( () => {
        const checkCurrentState = (id) => {
            setState(stateLights[parseInt(id)]);
        }
        checkCurrentState(id);
    }, []);

    const [state, setState] = useState(false);

    const changeState = () => {
        setState(!state);
        setStateLights(id);
    }

    return ( 
        <Button 
            style={[buttonStyle, state ? styles.ledOn : styles.ledOff]}
            onPress={() => changeState()}
        >
        </Button>
     );
}
 
export default LedButton;