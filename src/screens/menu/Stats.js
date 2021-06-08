import React from 'react';
import {View,Text, ScrollView, Dimensions} from 'react-native'
import { HeaderProp } from './HeaderProp';

export default function Stats() {
  return (
  <View style={{flex:1, backgroundColor:'white'}}>
    <HeaderProp text='Stats' />
      <ScrollView style={{flex:1, backgroundColor:'white'}}>
        <View style={{ flex: 1}}>
            <View style={{flex:1 ,margin: 15}}>
            <Text style={{fontWeight:'bold', fontSize: 25, marginBottom: 10}}>Recent Progress</Text>
            <View style={{flex: 1, justifyContent:'center', alignItems:'center', borderRadius: 10, backgroundColor:'#4A7DFC'}}>
              <Text style={{color:'white', fontSize: 50, fontFamily:'Poppins-Bold', marginTop: 20}}>92%</Text>
              <Text style={{fontFamily:'Poppins-Regular', color:'white', opacity: 0.6, textAlign: 'center'}}>Congratulations ! Your today's health score is amazingly high</Text>
              <View style={{flex: 1, flexDirection:'row', backgroundColor:'#668FF4', marginTop: 30, justifyContent:'center', borderRadius: 10}}>
                <View style={{alignItems:'center', justifyContent:'center', borderRightWidth: 1, padding: 10, borderRightColor:'#4A7DFC'}}>
                  <Text style={{fontFamily:'Poppins-Regular', color:'white', opacity: 0.6, fontSize: 14}}>Goal Achieved</Text>
                  <Text style={{fontFamily:'Poppins-Bold', fontSize: 25, color:'white'}}>70%</Text>
                </View>
                <View style={{alignItems:'center', justifyContent:'center', padding: 10}}>
                  <Text style={{fontFamily:'Poppins-Regular', color:'white', opacity: 0.6, fontSize: 14}}>Fitness Rate</Text>
                  <Text style={{fontFamily:'Poppins-Bold', fontSize: 25, color:'white'}}>86%</Text>
                </View>
                <View style={{alignItems:'center', justifyContent:'center', borderLeftWidth: 1, padding: 10, borderLeftColor:'#4A7DFC'}}>
                  <Text style={{fontFamily:'Poppins-Regular', color:'white', opacity: 0.6, fontSize: 14}}>Calories Burnt</Text>
                  <Text style={{fontFamily:'Poppins-Bold', fontSize: 25, color:'white'}}>97%</Text>
                </View>
              </View>
            <Text style={{marginTop: 10, marginBottom: 10, fontFamily:'Poppins-Regular', color:'white', opacity: 0.6, fontSize: 14}}>Today's score update til 2pm</Text>
            </View>
            </View>
        </View>
      </ScrollView>
  </View>
  );
}