import React from 'react'
import {View, Text, ScrollView, Dimensions} from 'react-native'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'
import Icon from 'react-native-vector-icons/Fontisto'
import { HeaderProp } from './HeaderProp'
import { FloatingAction } from "react-native-floating-action";

//todo: tu async storage goi user ra

export default function Activity(){
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
    <View style={{flex:1}}>
      <HeaderProp text='Activity' />
      <ScrollView style={{flex:1, backgroundColor:'white'}}>
        <View style={{ flex: 1, height: Dimensions.get('screen').height }}>
          <Calendar
            // Enable horizontal scrolling, default = false
            horizontal={true}
            // Enable paging on horizontal, default = false
            pagingEnabled={true}
            onDayPress={(day) => {console.log('Selected Day', day)}}
          />
          <View style={{flex:1, alignSelf:'center', marginTop: 30}}>
            <Text style={{fontFamily:'Poppins-Bold', fontSize: 30, marginBottom: 10}}>Hello, Ulalah.</Text>
            <Icon name="quote-a-right" size={20} style={{alignSelf:'flex-start', color:'#668FF4', marginBottom: 10}}/>
            <Text>Here's your workout plan for today. Please complete the warm-up, main workout and look down.</Text>
            <Text style={{marginTop: 10}}>Every workout makes you better.</Text>
            <Icon name="quote-a-left" size={20} style={{alignSelf:'flex-end', marginTop: 10, color:'#668FF4'}}/>
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
  )
}