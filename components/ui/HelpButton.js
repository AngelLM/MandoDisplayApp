import React from 'react';
import { Button, Icon } from 'native-base';
import globalStyles from '../../styles/global';
import { useNavigation } from '@react-navigation/native';
import Octicon from 'react-native-vector-icons/Octicons';

const HelpButton = () => {
    const navigation = useNavigation();

    return ( 
        <Button 
            style={globalStyles.topbarButton}
            onPress={() => navigation.navigate('About')}
        >
            <Octicon style={globalStyles.topBarIcon} name="question" />
        </Button>
     );
}
 
export default HelpButton;