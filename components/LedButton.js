import React, { useState, useEffect } from 'react';
import { Button } from 'native-base';
import globalStyles from '../styles/global'

const LedButton = (props) => {
    // Extracting the params sent via props
    const { id, stateLights, setStateLights, buttonStyle } = props;

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
            style={[buttonStyle, state ? globalStyles.ledOn : globalStyles.ledOff]}
            onPress={() => changeState()}
        >
        </Button>
     );
}
 
export default LedButton;