import React from 'react';
import { Button, Icon } from 'native-base';
import globalStyles from '../../styles/global';
import { useNavigation } from '@react-navigation/native';

const PlayButton = (props) => {
    const {sequences, seq, setSequences, saveSequencesStorage} = props
    const navigation = useNavigation();

    // Create a new lightState full of false states (1 per led)
    var falseArray = new Array(60);
    for (var i = 0; i < falseArray.length; ++i) { falseArray[i] = false; }

    const newState = {
        lightState: falseArray,
        duration: 1000
    }

    return ( 
        <Button 
            style={globalStyles.topbarButton}
            onPress={() => navigation.navigate('State', { sequences, seqId:seq.id, state:newState, setSequences, saveSequencesStorage, stateIndex:-1 })}
        >
            <Icon style={globalStyles.topBarIcon} name="play-outline" />
        </Button>
     );
}
 
export default PlayButton;