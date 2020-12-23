import React, {useState, useEffect} from 'react';
import { Container, Text, H1, H3} from 'native-base';
import { Linking, View, StyleSheet } from 'react-native';
import globalStyles from '../styles/global';
import * as Progress from 'react-native-progress';
import { useNavigation, StackActions, NavigationActions } from '@react-navigation/native';

const Start = () => {
    const randomLoadText = ["Destroying Alderaan...", 
                            "Proving Han shot first...",
                            "Exterminating Ewoks...",
                            "Dis is nutsen...",
                            "Loading, the app is...",
                            "Killing some younglings...",
                            "Searching lost lightsabers...",
                            "Cloning more Djangos...",
                            "Looking for high ground...",
                            "Improving droids accuracy..."
                        ];
    const [rndText, setRndText] = useState("");

    const styles = StyleSheet.create({
        progress: {
          margin: 10,
        },
      });

    const [state, setState] = useState({
                                progress: 0,
                                indeterminate: true
                                });
    
    // Navigation
    const navigation = useNavigation();

    useEffect(() => {
        setRndText(randomLoadText[Math.floor(Math.random() * (randomLoadText.length))]);
        setTimeout(() => {
            setState({ indeterminate: false });
            let progress = 0;
            setState({ progress });
              var timer = setInterval(() => {
                progress += Math.random() / 20;
            if (progress > 1) {
                progress = 1;
                clearInterval(timer);
                navigation.reset({index:0, routes:[{name: 'Sequences'}]})
            }
            setState({ progress });
              }, 250);
            }, 1500);
    }, [])

    return (
        <Container style={globalStyles.container}>
            <View style={[globalStyles.contentMed, {justifyContent: 'space-between'}]}>
                <View>
                    <H1 style={globalStyles.title}>
                        Mando Chest Display
                    </H1>
                    <H3 style={globalStyles.subtitle}>Proudly coded by <H3 
                                                                style={{color: '#1b322c'}}
                                                                onPress={() => Linking.openURL('http://www.angel-lm.com')}>Ángel LM</H3>
                    </H3>
                    <View style={{borderBottomColor: 'white', borderBottomWidth: 1}}></View>
                </View>
                <View style={{justifyContent:'center', alignItems: 'center'}}>
                    <Text style={[globalStyles.textAbout, {fontSize: 20}]}>
                        {rndText}
                    </Text>
                    <Progress.Bar
                        style={styles.progress}
                        progress={state.progress}
                        color= '#FFF'
                        indeterminate={state.indeterminate}
                        width={400}
                        height={12}
                    />
                </View>
                <View style={{justifyContent:'center', alignItems: 'center'}}>
                    <Text style={globalStyles.textAbout}>
                    If you like this app, please consider supporting it by spreading the word or <Text style={{color:'#1b322c'}} onPress={() => Linking.openURL('https://www.paypal.com/paypalme/angellm/1')} >gifting a coffee to the developer</Text>!
                    </Text>
                </View>
            </View>
        </Container>
    );

}
 
export default Start;