import { View, Text, StyleSheet, TouchableOpacity, Dimensions,FlatList, Touchable} from "react-native";

const Box = ({item,x_size,y_size}) => {
    const element_length = x_size
    return(
        <TouchableOpacity>

        <View style={[styles.element_container, {width: element_length ? element_length:50}]}>
            <Text>{item}</Text>
        </View>
        </TouchableOpacity>

    );

}

const styles = StyleSheet.create({
    element_container:{
        height:50,
        fontSize:12,
        borderColor:"#000000",
        borderWidth:2,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center'
    }



});
export default Box;