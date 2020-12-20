import React from 'react';
import { Button } from 'native-base';
import globalStyles from '../../styles/global';
import { useNavigation } from '@react-navigation/native';
import Ionicon from 'react-native-vector-icons/Ionicons';

const ExportButton = (props) => {
    const {sequence} = props;
    const navigation = useNavigation();

    return ( 
        <Button 
            style={globalStyles.topbarButton}
            onPress={() => navigation.navigate('ExportSequence', { sequence })}
        >
            <Ionicon style={[globalStyles.topBarIcon, {transform:[{rotate: '-90deg'}]}]} name="exit-outline" />
        </Button>
     );
}
 
export default ExportButton