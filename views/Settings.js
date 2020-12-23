import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Container, Button, Text, Input} from 'native-base';
import globalStyles from '../styles/global';

import { useNavigation } from '@react-navigation/native';

const Settings = ({route}) => {
    // Extracting the params sent via route
    const { prevStyle, setPrevStyle, saveStyleStorage } = route.params;

    // Navigation
    const navigation = useNavigation();

    const [editStyle, setEditStyle] = useState({
        leftMargin: 0,
        topMargin: 0,
        topLedMargin: 0,
        displayWidth: 0,
        topLedHeight: 0,
        topLedWidth: 0,
        segmentHeight: 0,
        segmentWidth: 0});

    useEffect(() => {
        const copyStyle = Object.assign({}, prevStyle);
        setEditStyle(copyStyle);
    }, []);
    
    return ( 
        <Container style={globalStyles.container}>
            <View style={globalStyles.contentSettings}>
                <View style={{flex:1, flexDirection:'row', justifyContent: 'center', alignItems:'center'}}>
                    <Text style={globalStyles.textSettings}>Margin Top (px): </Text>
                    <Input
                        style={globalStyles.settingsInput}
                        placeholder="100"
                        keyboardType="numeric"
                        value = {editStyle.topMargin.toString()}
                        onChangeText={(text) => {
                            if(text==="") text="0";
                            const style = Object.assign({}, editStyle, { topMargin: parseInt(text) });
                            setEditStyle(style);
                        }}
                    />
                </View>
                <View style={{flex:1, flexDirection:'row', justifyContent: 'center', alignItems:'center'}}>
                    <Text style={globalStyles.textSettings}>Margin Left (px): </Text>
                    <Input
                        style={globalStyles.settingsInput}
                        placeholder="50"
                        keyboardType="numeric"
                        value = {editStyle.leftMargin.toString()}
                        onChangeText={(text) => {
                            if(text==="") text="0";
                            const style = Object.assign({}, editStyle, { leftMargin: parseInt(text) });
                            setEditStyle(style);
                        }}
                    />
                </View>
                <View style={{flex:0.35}}></View>
            </View>
            <View style={globalStyles.contentSettings}>
                <View style={{flex:1, flexDirection:'row', justifyContent: 'center', alignItems:'center'}}>
                    <Text style={globalStyles.textSettings}>Display Width (px): </Text>
                    <Input
                        style={globalStyles.settingsInput}
                        placeholder="527"
                        keyboardType="numeric"
                        value = {editStyle.displayWidth.toString()}
                        onChangeText={(text) => {
                            if(text==="") text="0";
                            const style = Object.assign({}, editStyle, { displayWidth: parseInt(text) });
                            setEditStyle(style);
                        }}
                    />
                </View>
                <View style={{flex:1, flexDirection:'row', justifyContent: 'flex-start', alignItems:'center'}}>
                    <Text style={globalStyles.textSettings}>Top Leds Margin (px): </Text>
                    <Input
                        style={globalStyles.settingsInput}
                        placeholder="15"
                        keyboardType="numeric"
                        value = {editStyle.topLedMargin.toString()}
                        onChangeText={(text) => {
                            if(text==="") text="0";
                            const style = Object.assign({}, editStyle, { topLedMargin: parseInt(text) });
                            setEditStyle(style);
                        }}
                    />
                </View>
                <View style={{flex:0.35}}></View>
            </View>
            <View style={globalStyles.contentSettings}>
                <View style={{flex:1, flexDirection:'row', justifyContent: 'center', alignItems:'center'}}>
                    <Text style={globalStyles.textSettings}>Top Leds Height (px): </Text>
                    <Input
                        style={globalStyles.settingsInput}
                        placeholder="40"
                        keyboardType="numeric"
                        value = {editStyle.topLedHeight.toString()}
                        onChangeText={(text) => {
                            if(text==="") text="0";
                            const style = Object.assign({}, editStyle, { topLedHeight: parseInt(text) });
                            setEditStyle(style);
                        }}
                    />
                </View>
                <View style={{flex:1, flexDirection:'row', justifyContent: 'flex-start', alignItems:'center'}}>
                    <Text style={globalStyles.textSettings}>Top Leds Width (px): </Text>
                    <Input
                        style={globalStyles.settingsInput}
                        placeholder="14"
                        keyboardType="numeric"
                        value = {editStyle.topLedWidth.toString()}
                        onChangeText={(text) => {
                            if(text==="") text="0";
                            const style = Object.assign({}, editStyle, { topLedWidth: parseInt(text) });
                            setEditStyle(style);
                        }}
                    />
                </View>
                <View style={{flex:0.35}}></View>
            </View>
            <View style={globalStyles.contentSettings}>
                <View style={{flex:1, flexDirection:'row', justifyContent: 'center', alignItems:'center'}}>
                    <Text style={globalStyles.textSettings}>Segment Height (px): </Text>
                    <Input
                        style={globalStyles.settingsInput}
                        placeholder="122"
                        keyboardType="numeric"
                        value = {editStyle.segmentHeight.toString()}
                        onChangeText={(text) => {
                            if(text==="") text="0";
                            const style = Object.assign({}, editStyle, { segmentHeight: parseInt(text) });
                            setEditStyle(style);
                        }}
                    />
                </View>
                <View style={{flex:1, flexDirection:'row', justifyContent: 'flex-start', alignItems:'center'}}>
                    <Text style={globalStyles.textSettings}>Segment Width (px): </Text>
                    <Input
                        style={globalStyles.settingsInput}
                        placeholder="74"
                        keyboardType="numeric"
                        value = {editStyle.segmentWidth.toString()}
                        onChangeText={(text) => {
                            if(text==="") text="0";
                            const style = Object.assign({}, editStyle, { segmentWidth: parseInt(text) });
                            setEditStyle(style);
                        }}
                    />
                </View>
                <View style={{flex:0.35}}></View>
            </View>
            <View style={[globalStyles.contentSettings, {flex:1.2}]}>
                <View style={{flex:1, flexDirection:'row', justifyContent: 'center', alignItems:'center', marginTop:10}}>
                    <Button
                        style={[globalStyles.button, {marginHorizontal:10}]}
                        square
                        onPress={() => {
                            setPrevStyle(editStyle);
                            saveStyleStorage(JSON.stringify(editStyle));
                            navigation.navigate("Sequences");
                        }}  
                    >
                        <Text style={globalStyles.buttonText}>Save Settings</Text>
                    </Button>
                    <Button
                        style={[globalStyles.button, {marginHorizontal:10}]}
                        square
                        onPress={() => {
                            navigation.navigate("TestPreview", {prevStyle:editStyle})
                        }}    
                    >
                        <Text style={globalStyles.buttonText}>Test</Text>
                    </Button>
                    
                </View>
            </View>
        </Container>
     );
}
 
export default Settings;