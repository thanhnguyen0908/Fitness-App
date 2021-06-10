import React, {useState, useEffect} from 'react'
import {View, Text, ScrollView, Dimensions} from 'react-native'
import {Calendar} from 'react-native-calendars'
import Icon from 'react-native-vector-icons/Fontisto'
import { HeaderProp } from '../header/HeaderProp'
import { FloatingAction } from "react-native-floating-action";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import styles from './ActivityStyles'

//todo: tu async storage goi user ra

export default function Activity(){

  const [displayName, setDisplayName] = useState([]);

  
  const userUID = auth().currentUser.uid
  const getData = async () => {

    const snapshot = await firestore().collection('users').doc(userUID).get()
    setDisplayName(snapshot.data());
  };

  useEffect(() => {
    // const userEmail = auth().currentUser.email
    // setEmail(userEmail)
    getData() 
  }, [])

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
    <View style={styles.container}>
      <HeaderProp text='Activity' />
      <ScrollView style={styles.scroll}>
        <View style={styles.smallcontainer}>
          <Calendar
            // Enable horizontal scrolling, default = false
            horizontal={true}
            // Enable paging on horizontal, default = false
            pagingEnabled={true}
            onDayPress={(day) => {console.log('Selected Day', day)}}
          />
          <View style={styles.textcontainer}>
            <Text style={styles.hello}>Hello, {displayName.fullName}.</Text>
            <Icon name="quote-a-right" size={20} style={styles.quoteright}/>
            <Text>Here's your workout plan for today. Please complete the warm-up, main workout and look down.</Text>
            <Text style={{marginTop: 10}}>Every workout makes you better.</Text>
            <Icon name="quote-a-left" size={20} style={styles.quoteleft}/>
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