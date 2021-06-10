import React from 'react'
import {View,Text, ScrollView, Dimensions, Touchable, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function RoutineScreen({navigation}){
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      <ScrollView style={{flex:1}}>
        <View style={{flex:1, width:'90%', alignSelf:'center',height: Dimensions.get('screen').height }}>
          <Icon name='arrow-back' size = {23} style={{marginTop:20}} onPress={()=>navigation.navigate('Suggestion')}/>
          <Text style={{fontFamily:'Poppins-Bold', fontSize:25, marginTop: 20}}>THE GABRIEL PROGRAM</Text>
          <View style={{flexDirection: 'row'}}>
            <Icon name='timer' size={25} style={{marginTop:5}}/>
            <Text style={{fontFamily:'Poppins-Bold', fontSize:25, marginLeft: 5}}>12 WEEKS</Text>
          </View>
          <Text style={{color:'#61B4A5', fontSize: 16, marginTop: 15}}>Summary: This plan will focus on your core as well as building mass on muscle</Text>
          <View style={{marginTop: 10, flexDirection:'row'}}>
            <Icon name='directions-run' size={20}/>
            <Text style={{fontSize:16}}>Workout Completed:</Text>
            <View style={{flex:1}}><Text style={{textAlign:'right', fontSize:16}}>600 P</Text></View>
          </View>
          <View style={{marginTop: 10, flexDirection:'row'}}>
            <Icon name='star' size={20}/>
            <Text style={{fontSize:16}}>Star Version:</Text>
            <View style={{flex:1}}><Text style={{textAlign:'right', fontSize:16}}>400 P</Text></View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={{backgroundColor:'#4A7DFC', height: '8%', width:'90%', alignSelf:'center', justifyContent:'center', borderRadius: 5}} onPress={()=> navigation.navigate('Menu')}>
        <Text style={{textAlign:'center', fontFamily:'Poppins-Bold', color:'white', fontSize: 16}}>Start this plan now</Text>
      </TouchableOpacity>
    </View>
  )
}