import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {React, Component, useState, useEffect} from "react";
//import rootReducer from "./node_modules/reducers";
//import {Provider} from "react-redux"
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./Main"

//const store = configureStore({ reducer: rootReducer, middleware: [thunk] });
const Stack = createStackNavigator();

const App = () => {
  return (
    //<Provider store={store} theme={Theme}>
      <NavigationContainer theme={{ colors: { background: "#A0A0A0" } }}>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Main"
            options={{ headerShown: false }}>
            {(navigationProps) => (
              <MainScreen 
                {...navigationProps} 
                // other props if necessary
              />
            )}
            </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    //</Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;
