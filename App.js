import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Inicio from './screens/Inicio';
import Curso from './screens/Curso';
import Calendario from './screens/Calendario';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: "horizontal",
            }}
      initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Curso" component={Curso} />
        <Stack.Screen name="Calendario" component={Calendario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}