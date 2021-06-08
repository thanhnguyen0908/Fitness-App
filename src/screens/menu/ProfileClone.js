import React, {useEffect, useState} from 'react'
import {View, Text, TouchableOpacity, TextInput, ScrollView, Dimensions, StyleSheet, Image} from 'react-native'
import auth from '@react-native-firebase/auth';
import { HeaderProp } from './HeaderProp';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function Profile() {

  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      <HeaderProp text='Profile Clone' />
      <ScrollView style={{flex:1, backgroundColor:'gray'}}>
        <View style={{flex:1, backgroundColor:'red'}}>
          <View style={{margin: 20, flex: 1}}>
              <Text style={{fontWeight:'bold', fontSize: 20}}>Physical Traits</Text>
              <View style={{backgroundColor:'white', justifyContent:'center', borderRadius: 10, marginTop: 10, elevation: 3}}>
                <View style={{flexDirection:'row', borderWidth: 1, marginLeft: 25, marginTop: 20, width:'40%'}}>
                  <MaterialCommunityIcons name='weight' size={30} style={{marginTop: 5}}/>
                  <View>
                  <Text style={{fontWeight:'bold', fontSize: 18}}>Weight:</Text>
                  <Text>Blank</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row', borderBottomWidth: 1, margin: 25, width:'60%'}}>
                  <MaterialCommunityIcons name='human-male-height' size={30} style={{marginTop: 5}}/>
                  <View style={{alignItems:'flex-start'}}>
                  <Text style={{fontWeight:'bold', fontSize: 18}}>Height:</Text>
                  <Text>Blank</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row', borderBottomWidth: 1, marginLeft: 25,marginBottom: 25, width:'80%'}}>
                  <MaterialCommunityIcons name='gender-male-female-variant' size={30} style={{marginTop: 5}}/>
                  <View>
                  <Text style={{fontWeight:'bold', fontSize: 18}}>Gender:</Text>
                  <Text>Blank</Text>
                  </View>
                </View>
              </View>
            </View>
          <View style={{margin: 20, flex: 1}}>
              <Text style={{fontWeight:'bold', fontSize: 20}}>Contact Information</Text>
              <View style={{backgroundColor:'white', justifyContent:'center', borderRadius: 10, marginTop: 10, elevation: 3}}>
                <View style={{flexDirection:'row', borderWidth: 1, margin: 20, marginTop: 30}}>
                  <MaterialCommunityIcons name='weight' size={30} style={{marginTop: 5}}/>
                  <View>
                  <Text style={{fontWeight:'bold', fontSize: 18}}>Full name:</Text>
                  <Text>Blank</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row', borderBottomWidth: 1, marginLeft: 20, marginRight: 20}}>
                  <MaterialCommunityIcons name='human-male-height' size={30} style={{marginTop: 5}}/>
                  <View style={{alignItems:'flex-start'}}>
                  <Text style={{fontWeight:'bold', fontSize: 18}}>Username:</Text>
                  <Text>Blank</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row', borderBottomWidth: 1, margin: 20}}>
                  <MaterialCommunityIcons name='gender-male-female-variant' size={30} style={{marginTop: 5}}/>
                  <View>
                  <Text style={{fontWeight:'bold', fontSize: 18}}>Email:</Text>
                  <Text>Blank</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row', borderBottomWidth: 1, marginBottom: 30, marginLeft:20, marginRight: 20}}>
                  <MaterialCommunityIcons name='gender-male-female-variant' size={30} style={{marginTop: 5}}/>
                  <View>
                  <Text style={{fontWeight:'bold', fontSize: 18}}>Address:</Text>
                  <Text>Blank</Text>
                  </View>
                </View>
              </View>
          </View>
          <View style={{flex: 1, flexDirection:'row', justifyContent:'space-evenly', margin: 10}}>
          <TouchableOpacity style={{backgroundColor:'white', padding: 20, borderRadius: 10, elevation: 3, width:'35%', alignItems:'center', justifyContent:'center'}} onPress={() => navigation.navigate('Clone')}>
            <MaterialCommunityIcons name = 'circle-edit-outline' size={35} />
            <Text style={{fontFamily:'Poppins-Bold', textAlign:'center'}}>EDIT PROFILE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'white', padding: 20, borderRadius: 10, elevation: 3, width:'35%', alignItems:'center', justifyContent:'center'}} onPress={()=>onLogout()}>
            <MaterialCommunityIcons name = 'exit-to-app' size={35} />
            <Text style={{fontFamily:'Poppins-Bold', textAlign:'center'}}>LOG OUT</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{ 
    flex: 1,
    backgroundColor:'white', 
    height: Dimensions.get('screen').height },
  avatarcontainer:{
    backgroundColor:'#4A7DFC', 
    height:'20%', 
    borderBottomLeftRadius: 15, 
    borderBottomRightRadius: 15, 
    justifyContent:'center', 
    alignItems:'center', 
    flexDirection:'row',
    },
  avatar:{
    backgroundColor:'white', 
    width:'30%', 
    height: '70%', 
    borderRadius: 10, 
    elevation: 3},
})