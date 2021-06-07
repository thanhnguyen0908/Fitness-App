import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export const Props = (props) => {
  return (
    <View style = {[styles.box, props.inputStyle]} >
        <Text style={{fontSize: 20}}>{props.text}:</Text>
        <TextInput 
        style={styles.input} 
        textAlign={'right'} 
        secureTextEntry={props.isSecurity} 
        maxLength={props.isLength} 
        onChangeText={props.listenerChangeText} 
        value={props.inputValue}           
        />
    </View>
  );
}

const styles = StyleSheet.create({
  box:{
    flexDirection:'row',
    borderBottomWidth: 1,
    borderColor:'#668FF4',
    height: 40,
    width: '80%',
    alignSelf: 'center',
    marginTop: 1,
  },
  input:{
    fontSize: 17,
    flex: 1,
    },
})