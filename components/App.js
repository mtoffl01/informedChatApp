import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Main from './Main'
import Bio from './Bio'
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from '../navigation/myBottomTabNavigator'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Bio" component={Bio} />
        <Stack.Screen name="Tabs" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
