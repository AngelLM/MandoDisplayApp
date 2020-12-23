import 'react-native-gesture-handler';
import React from 'react';
import { Root } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Import views
import Start from './views/Start';
import Sequences from './views/Sequences';
import NewSequence from './views/NewSequence';
import ImportSequence from './views/ImportSequence';
import ExportSequence from './views/ExportSequence';
import Sequence from './views/Sequence';
import State from './views/State';
import ColorPick from './views/ColorPick';
import Preview from './views/Preview';
import TestPreview from './views/TestPreview';
import Settings from './views/Settings';
import About from './views/About';

import HelpButton from './components/ui/HelpButton';

const App = () => {
  return (
    <>
      <Root>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Start">
            <Stack.Screen 
              name='Start'
              component={Start}
              options={({route}) => { 
                return({
                title: 'Start',
                headerTitleAlign: 'center',
                headerTintColor: '#FFF',
                headerStyle:{
                  backgroundColor: '#244a3b'
                },
                headerTitleStyle:{
                  fontWeight: 'bold'
                },
                headerShown: false
              })}}
            />
            <Stack.Screen 
              name='Sequences'
              component={Sequences}
              options={({route}) => { 
                return({
                title: 'Mando Chest Display',
                headerTitleAlign: 'center',
                headerTintColor: '#FFF',
                headerStyle:{
                  backgroundColor: '#244a3b'
                },
                headerTitleStyle:{
                  fontWeight: 'bold'
                },
                headerLeft: () =>  <HelpButton
                />
              })}}
            />
              <Stack.Screen 
                name='NewSequence'
                component={NewSequence}
                options={{
                  title: 'Create New Display Sequence',
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
                name='ImportSequence'
                component={ImportSequence}
                options={{
                  title: 'Import Display Sequence',
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
                name='ExportSequence'
                component={ExportSequence}
                options={{
                  title: 'Export Display Sequence',
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
            <Stack.Screen 
              name='TestPreview'
              component={TestPreview}
              options={{
                title: 'TestPreview',
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
            <Stack.Screen 
              name='Settings'
              component={Settings}
              options={{
                title: 'Display Settings',
                headerTitleAlign: 'center',
                headerTintColor: '#FFF',
                headerStyle:{
                  backgroundColor: '#244a3b'
                },
                headerTitleStyle:{
                  fontWeight: 'bold'
                },
              }}
            />
            <Stack.Screen 
              name='About'
              component={About}
              options={{
                title: 'Mando Chest Display 1.0',
                headerTitleAlign: 'center',
                headerTintColor: '#FFF',
                headerStyle:{
                  backgroundColor: '#244a3b'
                },
                headerTitleStyle:{
                  fontWeight: 'bold'
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Root>
    </>
  );
};

export default App;
