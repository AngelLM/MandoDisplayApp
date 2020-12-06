import 'react-native-gesture-handler';
import React from 'react';
import { Root } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Import views
import Sequences from './views/Sequences';
import NewSequence from './views/NewSequence';
import Sequence from './views/Sequence';
import State from './views/State';
import Preview from './views/Preview';


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
                }
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
                }
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Root>
    </>
  );
};

export default App;
