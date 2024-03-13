import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from './colors'; // Make sure this path is correct

const InputBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.input}></View>
            <View style={styles.answer}></View>
        </View>


    );
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        backgroundColor:colors.white,
        flexDirection:'row',
        height:"100%",
    },
    input:{
        borderColor:colors.gray,
        borderWidth:1,
        width:"75%",
        marginTop:5,
        marginBottom:5,
        marginRight:5

    },
    answer:{
        borderColor:colors.gray,
        borderWidth:1,
        width:'23%',
        marginTop:5,
        marginBottom:5,

    }
});

export default InputBox;