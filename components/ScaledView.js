import { StyleSheet, View } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
    scaled:{
        backgroundColor: 'green',
        width: 40,
        height: 40,
    }
});

const ScaledView = () => {
    return ( 
        <View
            style = {styles.scaled}
        >
            <View
                style={{
                    backgroundColor: 'blue',
                    width: 20,
                    height: 20,
                    transform:[
                        {scaleX: 2},
                        {scaleY: 2}
                    ]
                }}
            />
        </View>
     );
}
 
export default ScaledView;