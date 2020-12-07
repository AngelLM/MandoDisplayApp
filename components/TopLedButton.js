import React, { useState, useEffect } from 'react';
import { Button } from 'native-base';
import globalStyles from '../styles/global'

const TopLedButton = (props) => {
    // Extracting the params sent via props
    // console.log(props);
    const { id, stateLights, setStateLights } = props;

    useEffect( () => {
        const checkCurrentState = (id) => {
            setState(stateLights[parseInt(id)]);
        }
        checkCurrentState(id);
    }, []);

    const [state, setState] = useState(false);

    const changeState = () => {
        setState(!state);
        // console.log(state);
        setStateLights(id);
        // console.log(stateLights);
    }

    return ( 
        <Button 
            style={[globalStyles.topLedButton, state ? globalStyles.ledOn : globalStyles.ledOff]}
            onPress={() => changeState()}
        >
        </Button>
     );
}
 
export default TopLedButton;