import React from 'react';
import { Container, Text, Button} from 'native-base';
import { Linking, View } from 'react-native';
import globalStyles from '../styles/global';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const About = () => {
    return (
        <Container style={globalStyles.container}>
            <View style={globalStyles.contentAbout}>
                <View>
                    <Text style={globalStyles.textAbout}>
                        The development of this app took more than 100 hours. Since time is not transferable, would you like to buy me a coffee?
                    </Text>
                    <Text style={globalStyles.textAbout}>
                        It will help me stay awake to create more projects like this one and to keep sharing them for free!
                    </Text>
                    <Text style={globalStyles.textAbout}>
                        Thank you very much!  ( ^‿^)c[_]
                    </Text>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                        <Button 
                            style={[globalStyles.button, {borderRadius: 50, marginHorizontal:10}]}
                            onPress={() => Linking.openURL('https://twitter.com/_angellm')}
                            >
                            <MaterialCommunityIcons name="twitter" style={{fontSize: 26, color: '#FFF', marginHorizontal:10}}/>
                        </Button>
                        <Button 
                            style={[globalStyles.button, {borderRadius: 50, marginHorizontal:10}]}
                            onPress={() => Linking.openURL('https://www.youtube.com/AngelLM')}
                            >
                            <MaterialCommunityIcons name="youtube" style={{fontSize: 26, color: '#FFF', marginHorizontal:10}}/>
                        </Button>
                        <Button 
                            style={[globalStyles.button, {borderRadius: 20, marginHorizontal:10}]}
                            onPress={() => Linking.openURL('https://www.paypal.com/paypalme/angellm/1')}
                            >
                            <Text style={{color: '#FFF', textTransform: 'capitalize', fontSize:16, fontWeight:'400'}}>
                            <Entypo name="paypal" style={{fontSize: 20}} />   Gift a coffee!   <MaterialCommunityIcons name="coffee" style={{fontSize: 20}} /></Text>
                        </Button>
                        <Button 
                            style={[globalStyles.button, {borderRadius: 50, marginHorizontal:10}]}
                            onPress={() => Linking.openURL('http://www.angel-lm.com')}
                            >
                            <MaterialCommunityIcons name="web" style={{fontSize: 26, color: '#FFF', marginHorizontal:10}}/>
                        </Button>
                        <Button 
                            style={[globalStyles.button, {borderRadius: 50, marginHorizontal:10}]}
                            onPress={() => Linking.openURL('https://www.instagram.com/angel_lm_/')}
                            >
                            <MaterialCommunityIcons name="instagram" style={{fontSize: 26, color: '#FFF', marginHorizontal:10}}/>
                        </Button>
                    </View>
                </View>
                
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                    <Text style={[globalStyles.textAbout, {color: '#1b322c'}]} onPress={() => Linking.openURL('https://github.com/AngelLM/MandoDisplayApp')}>
                        Shared
                    </Text>
                    <Text style={globalStyles.textAbout}> under </Text>
                    <Text style={[globalStyles.textAbout, {color: '#1b322c'}]} onPress={() => Linking.openURL('https://choosealicense.com/licenses/gpl-3.0/')}>GPLv3 License</Text>
                </View>
            </View>
        </Container>
    );

}
 
export default About;