import React, {useState, useEffect} from 'react'
import {View, Text} from 'react-native'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import styles from './ProfileStyles'
import {InfoProps} from './InfoProps'

export default function PhysicalTraits() {
  const userUID = auth().currentUser.uid
  const [displayUser, setDisplayUser] = useState([]);

  const getUser = async () => {
    const snapshotuser = await firestore().collection('users').doc(userUID).collection('bmi').doc('BmiScore').get()
    setDisplayUser(snapshotuser.data());
  }

  useEffect(() => {
    getUser()
   }, [])

  return(
    <View style={styles.physcontainer}>
      <Text style={styles.phystext}>Physical Traits</Text>
      <View style={styles.whitecontainer}>
        <InfoProps firsttext='Weight(kg):' secondtext={displayUser.weight} iconname='weight-kilogram' inputStyle={{ marginLeft: 25, marginTop: 30, width:'40%', }}/>
        <InfoProps firsttext='Height(m):' secondtext={displayUser.height} iconname='human-male-height' inputStyle={{ margin: 25, width:'60%'}}/>
        <InfoProps firsttext='Gender:' secondtext={displayUser.gender} iconname='gender-male-female-variant' inputStyle={{ marginLeft: 25, marginBottom: 40, width:'80%', }}/>
      </View>
    </View>
  )
}