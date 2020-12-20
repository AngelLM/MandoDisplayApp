import React from 'react';
import { Button } from 'native-base';
import globalStyles from '../../styles/global';
import { useNavigation } from '@react-navigation/native';
import Octicon from 'react-native-vector-icons/Octicons';

const SettingsButton = (props) => {
    const {prevStyle, setPrevStyle, saveStyleStorage} = props;
    const navigation = useNavigation();

    return ( 
        <Button 
            style={globalStyles.topbarButton}
            onPress={() => navigation.navigate('Settings', { prevStyle, setPrevStyle, saveStyleStorage })}
        >
            <Octicon style={globalStyles.topBarIcon} name="gear" />
        </Button>
     );
}
 
export default SettingsButton;