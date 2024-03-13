import React, { Component, useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions,FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MainScreen from "./screens/MainScreen"
const Tab = createBottomTabNavigator();
const Main = () => {



return(
<Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarActiveTintColor: "#FFFFFF",
      tabBarInactiveTintColor: "#000000",
      headerShown: false,
      tabBarStyle: {
        height: 90,
        paddingHorizontal: 5,
        paddingTop: 0,
        paddingBottom: 30,
        backgroundColor: "#555555",
        position: "absolute",
        borderTopWidth: 0,
        elevation: 0,
      },
    })}
  >
    <Tab.Screen
      name="MainScreen"
      component={MainScreen}
      options={{
        tabBarLabel: "Main",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="food" color={color} size={size} />
        ),
        headerShown: false,
      }}
    />


    </Tab.Navigator>
  );


}

export default Main;