import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { Root } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Import views
import Sequences from './views/Sequences';
import NewSequence from './views/NewSequence';
import Sequence from './views/Sequence';
import State from './views/State';
import ColorPick from './views/ColorPick';
import Preview from './views/Preview';

import AddStateButton from './components/ui/AddStateButton';
import PlayButton from './components/ui/PlayButton';
import ColorButton from './components/ui/ColorButton';


const App = () => {
  return (
    <>
      <Root>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Sequences"
          >
            <Stack.Screen 
              name='Sequences'
              component={Sequences}
              options={{
                title: 'Mando Chest Display',
                headerTitleAlign: 'center',
                headerTintColor: '#FFF',
                headerStyle:{
                  backgroundColor: '#244a3b'
                },
                headerTitleStyle:{
                  fontWeight: 'bold'
                }
              }}
            />
              <Stack.Screen 
                name='NewSequence'
                component={NewSequence}
                options={{
                  title: 'Create New Sequence',
                  headerTitleAlign: 'center',
                  headerTintColor: '#FFF',
                  headerStyle:{
                    backgroundColor: '#244a3b'
                  },
                  headerTitleStyle:{
                    fontWeight: 'bold'
                  }
                }}
              />
            <Stack.Screen 
              name='Sequence'
              component={Sequence}
              options={({route}) => ({
                title: route.params.seq.sequenceName,
                headerTitleAlign: 'center',
                headerTintColor: '#FFF',
                headerStyle:{
                  backgroundColor: '#244a3b'
                },
                headerTitleStyle:{
                  fontWeight: 'bold'
                },
                headerRight: () =>  <View style={{flexDirection:'row'}}>
                                      <PlayButton
                                        sequences={route.params.sequences}
                                        seq={route.params.seq}
                                      />
                                      <ColorButton
                                        sequences={route.params.sequences}
                                        seqId={route.params.seq.id}
                                        setSequences={route.params.setSequences}
                                        saveSequencesStorage={route.params.saveSequencesStorage}
                                      />
                                      <AddStateButton
                                        sequences={route.params.sequences}
                                        seq={route.params.seq}
                                        setSequences={route.params.setSequences}
                                        saveSequencesStorage={route.params.saveSequencesStorage}
                                        stateIndex={-1}
                                      />
                                    </View>
              })}
            />
            <Stack.Screen 
              name='State'
              component={State}
              options={{
                title: 'State',
                headerShown: false
              }}
            />
            <Stack.Screen 
              name='ColorPick'
              component={ColorPick}
              options={{
                title: 'Select the LED color',
                headerTitleAlign: 'center',
                headerTintColor: '#FFF',
                headerStyle:{
                  backgroundColor: '#244a3b'
                },
                headerTitleStyle:{
                  fontWeight: 'bold'
                }
              }}
            />
            <Stack.Screen 
              name='Preview'
              component={Preview}
              options={{
                title: 'Preview',
                headerTitleAlign: 'center',
                headerTintColor: '#FFF',
                headerStyle:{
                  backgroundColor: '#244a3b'
                },
                headerTitleStyle:{
                  fontWeight: 'bold'
                },
                headerShown: false
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Root>
    </>
  );
};

export default App;
