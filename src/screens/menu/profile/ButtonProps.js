import React from 'react';
import { View, TouchableOpacity,Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const ButtonProps = (props) => {
  return (
      <TouchableOpacity style={styles.whitecontainer} onPress={props.onPressHandler}>
        <MaterialCommunityIcons name = {props.iconname} size={35} />
        <Text style={{textAlign:'center', color:'#61B4A5'}}>{props.text}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  whitecontainer: {
    backgroundColor:'white', 
    padding: 20, 
    borderRadius: 10, 
    elevation: 3, 
    width:'35%', 
    alignItems:'center', 
    justifyContent:'center'
  }
})