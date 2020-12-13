import React from 'react';
import { Button, Icon } from 'native-base';
import globalStyles from '../../styles/global';
import { useNavigation } from '@react-navigation/native';
import Octicon from 'react-native-vector-icons/Octicons';

const SettingsButton = () => {
    // const {sequences, seq, setSequences, saveSequencesStorage} = props
    // const navigation = useNavigation();

    // let index = sequences.findIndex(s => s.id === seq.id);

    return ( 
        <Button 
            style={globalStyles.topbarButton}
        //     onPress={() => navigation.navigate('Preview', { sequence: sequences[index] })}
        >
            <Octicon style={globalStyles.topBarIcon} name="gear" />
        </Button>
     );
}
 
export default SettingsButton;