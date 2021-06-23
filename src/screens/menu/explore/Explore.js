import React from 'react';
import {View,Text, ScrollView, TouchableOpacity} from 'react-native'
import { HeaderProp } from '../header/HeaderProp';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function Explore() {
  return (
  <View style={{flex:1, backgroundColor:'white'}}>
    <HeaderProp text='Explore' />
      <ScrollView style={{flex:1, backgroundColor:'white'}}>
        <View style={{ flex: 1, margin: 15}}>
            <Text style={{fontWeight:'bold', fontSize: 23, marginBottom: 10}}>Warm Ups</Text>
            <TouchableOpacity style={{backgroundColor:'white', padding: 10, borderRadius: 10, elevation: 5, flexDirection:'row', justifyContent:'space-between'}}>
              <Text style={{fontWeight:'bold', color:'#668FF4'}}>Warmups</Text>
              <MaterialIcons name='keyboard-arrow-right' size={20} style={{color:'#668FF4'}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'white', padding: 10, borderRadius: 10, elevation: 5, flexDirection:'row', justifyContent:'space-between', marginTop: 5, marginBottom: 5}}>
              <Text style={{fontWeight:'bold', color:'#668FF4'}}>Rests</Text>
              <MaterialIcons name='keyboard-arrow-right' size={20} style={{color:'#668FF4'}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'white', padding: 10, borderRadius: 10, elevation: 5, flexDirection:'row', justifyContent:'space-between'}}>
              <Text style={{fontWeight:'bold', color:'#668FF4'}}>Recovery & Stretching</Text>
              <MaterialIcons name='keyboard-arrow-right' size={20} style={{color:'#668FF4'}}/>
            </TouchableOpacity>
            <Text style={{fontWeight:'bold', fontSize: 23, marginTop: 15}}>Equipment Workouts</Text>
            <View style={{backgroundColor:'#668FF4', borderRadius: 5, marginTop: 10}}>
              <Text style= {{fontFamily: 'Poppins-Bold', fontSize: 30, color:'white', margin: 10}}>SIGNATURE WORKOUT</Text>
              <Text style={{fontFamily:'Poppins-Bold', color:'white', margin: 10}}>Complete these signatures workouts with proper technique as fast as you can.</Text>
            </View>
            <Text style={{fontWeight:'bold', fontSize: 23, marginBottom: 10, marginTop: 10}}>Muscle Group Workouts</Text>
            <TouchableOpacity style={{backgroundColor:'white', padding: 10, borderRadius: 10, elevation: 5, flexDirection:'row', justifyContent:'space-between'}}>
              <Text style={{fontWeight:'bold', color:'#668FF4'}}>Core</Text>
              <MaterialIcons name='keyboard-arrow-right' size={20} style={{color:'#668FF4'}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'white', padding: 10, borderRadius: 10, elevation: 5, flexDirection:'row', justifyContent:'space-between', marginTop: 5, marginBottom: 5}}>
              <Text style={{fontWeight:'bold', color:'#668FF4'}}>Upper Body</Text>
              <MaterialIcons name='keyboard-arrow-right' size={20} style={{color:'#668FF4'}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'white', padding: 10, borderRadius: 10, elevation: 5, flexDirection:'row', justifyContent:'space-between'}}>
              <Text style={{fontWeight:'bold', color:'#668FF4'}}>Lower Body</Text>
              <MaterialIcons name='keyboard-arrow-right' size={20} style={{color:'#668FF4'}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'white', padding: 10, borderRadius: 10, elevation: 5, flexDirection:'row', justifyContent:'space-between', marginTop: 5, marginBottom: 5}}>
              <Text style={{fontWeight:'bold', color:'#668FF4'}}>Full Body</Text>
              <MaterialIcons name='keyboard-arrow-right' size={20} style={{color:'#668FF4'}}/>
            </TouchableOpacity>
            <Text style={{fontWeight:'bold', fontSize: 23, marginBottom: 10, marginTop: 10}}>Time-based Workouts</Text>
            <TouchableOpacity style={{backgroundColor:'white', padding: 10, borderRadius: 10, elevation: 5, flexDirection:'row', justifyContent:'space-between'}}>
              <Text style={{fontWeight:'bold', color:'#668FF4'}}>10 mins</Text>
              <MaterialIcons name='keyboard-arrow-right' size={20} style={{color:'#668FF4'}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'white', padding: 10, borderRadius: 10, elevation: 5, flexDirection:'row', justifyContent:'space-between', marginTop: 5, marginBottom: 5}}>
              <Text style={{fontWeight:'bold', color:'#668FF4'}}>15 mins</Text>
              <MaterialIcons name='keyboard-arrow-right' size={20} style={{color:'#668FF4'}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'white', padding: 10, borderRadius: 10, elevation: 5, flexDirection:'row', justifyContent:'space-between'}}>
              <Text style={{fontWeight:'bold', color:'#668FF4'}}>20 mins</Text>
              <MaterialIcons name='keyboard-arrow-right' size={20} style={{color:'#668FF4'}}/>
            </TouchableOpacity>
        </View>
      </ScrollView>
  </View>
  )
}
