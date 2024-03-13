import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from './colors'; // Make sure this path is correct

const Button = ({ name, w, h, action }) => {
  // Ensure the style uses the width and height props
  const buttonStyle = [styles.container, { width: w, height: h }];
  
  return (
    <TouchableOpacity onPress={action} style={buttonStyle}>
      <View>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.white,
    borderWidth: 2, // You might want to add a border width if you want to see the border
    justifyContent: 'center',
    alignItems: 'center', // To center the text inside the button
    marginRight:2,
    marginBottom:2,
  },
  text: {
    color: colors.white,
    fontSize: 15,
  },

});

export default Button;