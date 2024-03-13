import React, { Component, useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions,FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import Box from "../assets/Box"
import {colors} from "../assets/colors"
const MainScreen = () =>{
  const answers = [
//where the calculations entered will appear when the user hits a new line, will be used to display a list view of these answers


  ]

  const buttons = [
    ['7', '8', '9', '÷'],
    ['4', '5', '6', '×'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
  ];

  // Function to handle button press
  const handlePress = (value) => {
    // Add your logic to handle press
    console.log(value);
  };

  // Render a button
  const renderButton = (label) => (
    <TouchableOpacity key={label} style={styles.button} onPress={() => handlePress(label)}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );

  // Render the rows of buttons
  const renderRow = (row, rowIndex) => (
    <View key={`row-${rowIndex}`} style={styles.buttonRow}>
      {row.map((buttonLabel) => renderButton(buttonLabel))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
    <View style={[styles.section, styles.redSection]} />
    <View style={[styles.section, styles.greenSection]} />
    <View style={[styles.section, styles.bottomSection]}>
      {/* 3 Vertical Views in the bottom section */}
      <View style={styles.verticalView}>
        {/* Rows in the first vertical view */}
      </View>
      <View style={styles.verticalView}>
        {/* Rows in the second vertical view */}
      </View>
      <View style={styles.verticalView}>
        {/* Rows in the third vertical view */}
      </View>
    </View>
  </SafeAreaView>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
},
section: {
  // Common style for all sections
},
redSection: {
  flex: 5,
  backgroundColor: 'red',
},
greenSection: {
  flex: 1,
  backgroundColor: 'green',
},
bottomSection: {
  flex: 4,
  backgroundColor: 'yellow',
  flexDirection: 'row', // Aligns the vertical views horizontally
},
verticalView: {
  flex: 1, // Each view will take up 1/3 of the bottom section
  backgroundColor: 'black',
  margin: 2, // Add margin if you want space between the vertical views
  // Add rows inside each vertical view as needed
},
// Add more styles for rows inside vertical views as needed
});



export default MainScreen;