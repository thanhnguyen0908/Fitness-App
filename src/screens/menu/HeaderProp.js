import React from 'react';
import { View, TouchableOpacity,Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

export const HeaderProp = (props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.headertext}>{props.text}</Text>
        <Ionicons name = "notifications-circle" size={30}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row', 
    justifyContent:'space-between', 
    padding: 10, 
    borderBottomWidth: 1, 
    borderBottomColor: '#61B4A5',
  },
  headertext:{
    fontSize:20, 
    fontWeight:'bold'}
})