import React from 'react';
import { View, TouchableOpacity,Text, StyleSheet } from 'react-native';

export const Props = (props) => {
  return (
    <View style={[styles.buttoncontainer, props.addStyle]}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttoncontainer:{
    flex: 1, 
    alignItems:'center'},
  button:{
    backgroundColor:'white', 
    justifyContent:'center', 
    alignItems:'center',
    width: '90%', 
    height: '80%', 
    borderRadius: 10, 
    elevation: 3},
  buttontext:{
    fontFamily:'Oswald-SemiBold', 
    fontSize: 17, 
    textAlign:'center'}
})