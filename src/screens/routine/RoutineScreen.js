import React, {useEffect} from 'react'
import {View,Text, ScrollView, Dimensions, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function RoutineScreen({route, navigation}){
  const longdes = route.params

  const onPassScreen = async () => {
    try {
        let passData = {
            ID: longdes.id,
        }
        await AsyncStorage.setItem('Ex', JSON.stringify(passData));
        console.log('Send ID', longdes.id)
    } catch (error) {
        console.log(error);
    }
    navigation.navigate('Menu', {screen: 'Activity'})
  }

  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      <ScrollView style={{flex:1}}>
        <View style={{flex:1, width:'90%', alignSelf:'center',height: Dimensions.get('screen').height }}>
          <Icon name='arrow-back' size = {23} style={{marginTop:20}} onPress={()=>navigation.navigate('Suggestion')}/>
          <Text style={{fontFamily:'Poppins-Bold', fontSize:25, marginTop: 20}}>{longdes.title}</Text>
          <View style={{flexDirection: 'row'}}>
            <Icon name='timer' size={25} style={{marginTop:5}}/>
            <Text style={{fontFamily:'Poppins-Bold', fontSize:25, marginLeft: 5}}>{longdes.time}</Text>
          </View>
          <Text style={{color:'#61B4A5', fontSize: 16, marginTop: 15}}>Summary: {longdes.longsummary}</Text>
          <View style={{flex: 1, backgroundColor:'#668FF4', margin: 20, borderRadius: 10, alignItems:'center', justifyContent:'center'}}>
            {/* <Video controls source={{uri: "https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4"}} style={{borderRadius: 10, flex: 1, width:'80%'}}/> */}
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={{backgroundColor:'#668FF4', height: '8%', width:'90%', alignSelf:'center', justifyContent:'center', borderRadius: 5}} onPress={()=> onPassScreen()}>
        <Text style={{textAlign:'center', fontFamily:'Poppins-Bold', color:'white', fontSize: 16}}>Start this plan now</Text>
      </TouchableOpacity>
    </View>
  )
}