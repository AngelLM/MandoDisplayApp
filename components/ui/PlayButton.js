import React from 'react';
import { Button, Icon } from 'native-base';
import globalStyles from '../../styles/global';
import { useNavigation } from '@react-navigation/native';

const PlayButton = (props) => {
    const {sequences, seq, setSequences, saveSequencesStorage} = props
    const navigation = useNavigation();

    let index = sequences.findIndex(s => s.id === seq.id);

    return ( 
        <Button 
            style={globalStyles.topbarButton}
            onPress={() => navigation.navigate('Preview', { sequence: sequences[index] })}
        >
            <Icon style={globalStyles.topBarIcon} name="play-outline" />
        </Button>
     );
}
 
export default PlayButton;