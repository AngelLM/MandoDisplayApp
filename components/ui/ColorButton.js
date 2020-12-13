import React from 'react';
import { Button, Icon } from 'native-base';
import globalStyles from '../../styles/global';
import { useNavigation } from '@react-navigation/native';

const ColorButton = (props) => {

    const { sequences, seqId, setSequences, saveSequencesStorage } = props;

    const navigation = useNavigation();

    return ( 
        <Button 
            style={globalStyles.topbarButton}
            onPress={() => navigation.navigate('ColorPick', { sequences, seqId, setSequences, saveSequencesStorage })}
        >
            <Icon style={[globalStyles.topBarIcon, {fontSize: 25, width: 25}]} name="color-fill-outline" />
        </Button>
     );
}
 
export default ColorButton;