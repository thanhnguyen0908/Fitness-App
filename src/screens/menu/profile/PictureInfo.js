import React, {useState, useEffect} from 'react'
import {View, Text, Image} from 'react-native'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import styles from './ProfileStyles'

export default function PictureInfo() {
  const userUID = auth().currentUser.uid
  const [displayUser, setDisplayUser] = useState([]);
  const [displayUserScore, setDisplayUserScore] = useState([]);
  const [image,setImage] = useState('https://i1.wp.com/lucloi.vn/wp-content/uploads/2020/08/b73-1.jpg?fit=800%2C462&ssl=1')
  let displayBmi = parseFloat((displayUserScore.weight / (displayUserScore.height * displayUserScore.height)).toFixed(2))

  const getUser = async () => {
    const snapshotuser = await firestore().collection('users').doc(userUID).get()
    setDisplayUser(snapshotuser.data());
  }

  const getUserScore = async () => {
    const snapshotuserscore = await firestore().collection('users').doc(userUID).collection('bmi').doc('BmiScore').get()
    setDisplayUserScore(snapshotuserscore.data());
  }

  useEffect(() => {
    getUser()
    getUserScore()
   }, []) 

  return (
    <View style={styles.avatarcontainer}>
      <View style={styles.avatar} >
        <Image source={{uri: displayUser.img
              ? displayUser.img
              : image}} style={styles.avatarimg} /></View>
      <View style={styles.avatarname}>
        <Text style={styles.avatarnametext}>
          {displayUser.fullName}
        </Text>
        <Text style={{color:'white', fontWeight:'bold', fontSize: 16}}>BMI Score: {displayBmi}</Text>
        <Text style={{color:'white', fontWeight:'bold', fontSize: 16}}>Age: {displayUserScore.age}</Text>
      </View>
    </View>
  )
}