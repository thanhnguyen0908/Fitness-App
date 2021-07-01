import React, {useState, useEffect} from 'react'
import {View, Text} from 'react-native'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import styles from './ProfileStyles'
import {InfoProps} from './InfoProps'

export default function ContactInfo() {
  const userUID = auth().currentUser.uid
  const [displayUser, setDisplayUser] = useState([]);

  const getUser = async () => {
    const snapshotuser = await firestore().collection('users').doc(userUID).get()
    setDisplayUser(snapshotuser.data());
  }

  useEffect(() => {
    getUser()
   }, []) 

  return (
    <View style={styles.contactcontainer}>
    <Text style={styles.phystext}>Contact Information</Text>
    <View style={styles.whitecontainer}>
      <InfoProps firsttext='Full Name:' secondtext={displayUser.fullName} iconname='form-textbox' inputStyle={{ margin: 25,}}/>
      <InfoProps firsttext='Email:' secondtext={displayUser.email} iconname='email' inputStyle={{ marginLeft: 25, marginRight: 25}}/>
      <InfoProps firsttext='Phone:' secondtext={displayUser.phoneNum} iconname='phone' inputStyle={{ margin: 25, marginBottom: 40,}}/>
    </View>
</View>
  )
}