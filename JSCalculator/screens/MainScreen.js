import React, { Component, useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions,FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import Box from "../assets/Box"
import Button from "../assets/Button"
import {colors} from "../assets/colors"
import InputBox from "../assets/InputBox"
const MainScreen = () =>{
  const [answers, setAnswers] = useState([
//where the calculations entered will appear when the user hits a new line, will be used to display a list view of these answers


  ])
  const secondButtons = [
      { name: '7', w: '31%', h: '15%' },
      { name: '8', w: '31%', h: '15%' },
      { name: '9', w: '31%', h: '15%' },
      { name: '4', w: '31%', h: '15%' },
      { name: '5', w: '31%', h: '15%' },
      { name: '6', w: '31%', h: '15%' },
      { name: '1', w: '31%', h: '15%' },
      { name: '2', w: '31%', h: '15%' },
      { name: '3', w: '31%', h: '15%' },
      { name: '0', w: '63.5%', h: '15%' },
      { name: '.', w: '31.5%', h: '15%' },
    // ... Add other button rows with proper names
  ];
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
    <View style={[styles.section, styles.greenSection]}>
      <InputBox></InputBox>
    </View>
    <View style={[styles.section, styles.bottomSection]}>
      {/* 3 Vertical Views in the bottom section */}
      <View style={styles.verticalView}>
        
        </View>
      <View style={styles.verticalView}>
      {secondButtons.map((row, rowIndex) => (
          
          <Button
            key={rowIndex}
            name={row.name}
            w={row.w}
            h={row.h}
            action={() => handleButtonPress(button.name)}
          />
        ))}
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
  flexDirection:'row',
  flexWrap:'wrap',
  margin: 2, // Add margin if you want space between the vertical views
  // Add rows inside each vertical view as needed
},
buttonRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 10, // Adjust the space between rows as needed
  width:"25%",
},
// Add more styles for rows inside vertical views as needed
});



export default MainScreen;