import React from 'react';
import { Button } from 'native-base';
import globalStyles from '../../styles/global';
import { useNavigation } from '@react-navigation/native';
import Ionicon from 'react-native-vector-icons/Ionicons';

const ImportButton = (props) => {
    const { sequences, setSequences, saveSequencesStorage } = props;
    const navigation = useNavigation();

    return ( 
        <Button 
            style={globalStyles.topbarButton}
            onPress={() => navigation.navigate('ImportSequence', { sequences, setSequences, saveSequencesStorage })}
        >
            <Ionicon style={[globalStyles.topBarIcon, {transform:[{rotate: '90deg'}]}]} name="enter-outline" />
        </Button>
     );
}
 
export default ImportButton