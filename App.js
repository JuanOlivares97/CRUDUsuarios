import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AgregarUsuario from './screens/AgregarUsuario';
import DetalleUsuario from './screens/DetalleUsuario';
import ListarUsuarios from './screens/ListarUsuarios';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='AgregarUsuario' component={AgregarUsuario} />
      <Stack.Screen name='ListarUsuarios' component={ListarUsuarios} />
      <Stack.Screen name='DetalleUsuario' component={DetalleUsuario} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

