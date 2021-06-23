import React from 'react';
import {View,Text, ScrollView, TouchableOpacity} from 'react-native'
import { HeaderProp } from '../header/HeaderProp';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Stats() {
  return (
  <View style={{flex:1, backgroundColor:'white'}}>
    <HeaderProp text='Stats' />
      <ScrollView style={{flex:1, backgroundColor:'white'}}>
        <View style={{ flex: 1, margin: 15}}>
            <View style={{flex:1}}>
            <Text style={{fontWeight:'bold', fontSize: 23, marginBottom: 10}}>Recent Progress</Text>
            <View style={{flex: 1, justifyContent:'center', alignItems:'center', borderRadius: 10, backgroundColor:'#4A7DFC'}}>
              <Text style={{color:'white', fontSize: 50, fontFamily:'Poppins-Bold', marginTop: 20}}>0%</Text>
              <Text style={{fontFamily:'Poppins-Regular', color:'white', opacity: 0.6, textAlign: 'center'}}>Oops ! Looks like you haven't completed any activity yet.</Text>
              <View style={{flex: 1, flexDirection:'row', backgroundColor:'#668FF4', marginTop: 30, justifyContent:'center', borderRadius: 10}}>
                <View style={{alignItems:'center', justifyContent:'center', borderRightWidth: 1, padding: 10, borderRightColor:'#4A7DFC'}}>
                  <Text style={{fontFamily:'Poppins-Regular', color:'white', opacity: 0.6, fontSize: 14}}>Goal Achieved</Text>
                  <Text style={{fontFamily:'Poppins-Bold', fontSize: 25, color:'white'}}>0%</Text>
                </View>
                <View style={{alignItems:'center', justifyContent:'center', padding: 10}}>
                  <Text style={{fontFamily:'Poppins-Regular', color:'white', opacity: 0.6, fontSize: 14}}>Fitness Rate</Text>
                  <Text style={{fontFamily:'Poppins-Bold', fontSize: 25, color:'white'}}>0%</Text>
                </View>
                <View style={{alignItems:'center', justifyContent:'center', borderLeftWidth: 1, padding: 10, borderLeftColor:'#4A7DFC'}}>
                  <Text style={{fontFamily:'Poppins-Regular', color:'white', opacity: 0.6, fontSize: 14}}>Calories Burnt</Text>
                  <Text style={{fontFamily:'Poppins-Bold', fontSize: 25, color:'white'}}>0%</Text>
                </View>
              </View>
            <Text style={{marginTop: 10, marginBottom: 10, fontFamily:'Poppins-Regular', color:'white', opacity: 0.6, fontSize: 14}}>Today's score update til 2pm</Text>
            </View>
            </View>
            <View style={{flex:1, marginTop: 10}}>
              <Text style={{fontWeight:'bold', fontSize: 23, marginBottom: 10}}>Goal Compliance</Text>
              <Text>None</Text>
            </View>
            <View style={{flex:1 }}>
              <Text style={{fontWeight:'bold', fontSize: 23, marginBottom: 10}}>Total Time</Text>
              <View style={{flexDirection:'row', justifyContent:'space-evenly', margin: 20}}>
                <TouchableOpacity style={{backgroundColor:'white', padding: 20, borderRadius: 10, elevation: 3, width:'40%', alignItems:'center', justifyContent:'center'}}>
                  <MaterialCommunityIcons name = 'lightning-bolt' size={35} />
                  <Text style={{color:'#61B4A5', fontSize: 16}}>Active Time</Text>
                  <Text style={{fontWeight:'bold', fontSize: 16}}>0 min</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'white', padding: 20, borderRadius: 10, elevation: 3, width:'40%', alignItems:'center', justifyContent:'center'}}>
                  <MaterialCommunityIcons name = 'timer-sand' size={35} />
                  <Text style={{color:'#61B4A5', fontSize: 16}}>Rest Time</Text>
                  <Text style={{fontWeight:'bold', fontSize: 16}}>0 min</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
      </ScrollView>
  </View>
  );
}