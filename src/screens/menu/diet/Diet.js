import React from 'react';
import {View,TextInput, ScrollView, Text, TouchableOpacity, Dimensions} from 'react-native'
import { HeaderProp } from '../header/HeaderProp';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { FloatingAction } from "react-native-floating-action";


export default function Diet() {
  const actions = [
    {
      text: "Accessibility",
      name: "bt_accessibility",
      position: 2
    },
    {
      text: "Language",
      name: "bt_language",
      position: 1
    },
    {
      text: "Location",
      name: "bt_room",
      position: 3
    },
    {
      text: "Video",
      name: "bt_videocam",
      position: 4
    }
  ];
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      <HeaderProp text='Diet' />
      <ScrollView style={{flex:1}}>
        <View style={{flex:1, alignItems:'center', height: Dimensions.get('screen').height }}>
          <View style={{flexDirection:'row', marginTop: 20,justifyContent:'space-around', width: '90%', height:'5%'}}>
            <TouchableOpacity style={{backgroundColor:'white', justifyContent:'center', alignItems:'center', borderRadius: 5, elevation: 3, width:'45%'}}>
              <Text style={{fontWeight:'bold'}}>My Plan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'white', justifyContent:'center', alignItems:'center', borderRadius: 5, elevation: 3, width:'45%'}}>
              <Text style={{fontWeight:'bold'}}>All Food</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1,width: '90%', marginTop: 30}}>
            <Text style={{fontFamily:'Poppins-Bold', fontSize: 30 }}>Hi Again !</Text>
            <Text style={{fontSize: 16, marginTop: 10}}>Take a peek at your designed workout plan.</Text>
            <Text style={{fontFamily:'Poppins-Bold', fontSize: 16, color:'#668FF4', marginTop: 20}}>This week</Text>
          </View>
        </View>
      </ScrollView>
      <FloatingAction
            actions={actions}
            onPressItem={name => {
              console.log(`Selected Button: ${name}`);
            }}
          />
    </View>
  );
}