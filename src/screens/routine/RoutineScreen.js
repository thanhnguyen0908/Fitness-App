import React from 'react'
import {View,Text, ScrollView, Dimensions, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Video from 'react-native-video'

export default function RoutineScreen({route, navigation}){
  const data = route.params
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      <ScrollView style={{flex:1}}>
        <View style={{flex:1, width:'90%', alignSelf:'center',height: Dimensions.get('screen').height }}>
          <Icon name='arrow-back' size = {23} style={{marginTop:20}} onPress={()=>navigation.navigate('Suggestion')}/>
          <Text style={{fontFamily:'Poppins-Bold', fontSize:25, marginTop: 20}}>{data.title}</Text>
          <View style={{flexDirection: 'row'}}>
            <Icon name='timer' size={25} style={{marginTop:5}}/>
            <Text style={{fontFamily:'Poppins-Bold', fontSize:25, marginLeft: 5}}>{data.time}</Text>
          </View>
          <Text style={{color:'#61B4A5', fontSize: 16, marginTop: 15}}>Summary: {data.summary}</Text>
          <View style={{marginTop: 10, flexDirection:'row'}}>
            <Icon name='directions-run' size={20}/>
            <Text style={{fontSize:16}}>Workout Completed:</Text>
            <View style={{flex:1}}><Text style={{textAlign:'right', fontSize:16}}>0 P</Text></View>
          </View>
          <View style={{marginTop: 10, flexDirection:'row'}}>
            <Icon name='star' size={20}/>
            <Text style={{fontSize:16}}>Star Version:</Text>
            <View style={{flex:1}}><Text style={{textAlign:'right', fontSize:16}}>0 P</Text></View>
          </View>
          <View style={{flex: 1, backgroundColor:'#668FF4', margin: 20, borderRadius: 10, alignItems:'center', justifyContent:'center'}}>
            {/* <Video controls source={{uri: "https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4"}} style={{borderRadius: 10, flex: 1, width:'80%'}}/> */}
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={{backgroundColor:'#668FF4', height: '8%', width:'90%', alignSelf:'center', justifyContent:'center', borderRadius: 5}} onPress={()=> navigation.navigate('Menu', data)}>
        <Text style={{textAlign:'center', fontFamily:'Poppins-Bold', color:'white', fontSize: 16}}>Start this plan now</Text>
      </TouchableOpacity>
    </View>
  )
}