import React from 'react';
import { View, TouchableOpacity,Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const InfoProps = (props) => {
  return (
    <View style={[styles.container, props.inputStyle]}>
      <MaterialCommunityIcons name={props.iconname} size={40} style={{marginTop: 5}}/>
      <View style={{marginLeft: 5}}>
        <Text style={{fontWeight:'bold', fontSize: 18}}>{props.firsttext}</Text>
        <Text>{props.secondtext}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row', 
    borderBottomWidth: 1, 
    borderBottomColor:'#668FF4'}
})