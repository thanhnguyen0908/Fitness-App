import React, {useState, useEffect} from 'react'
import {View, Text, ScrollView, Image} from 'react-native'
import auth from '@react-native-firebase/auth';
import { HeaderProp } from '../header/HeaderProp';
import firestore from '@react-native-firebase/firestore';
import styles from './ProfileStyles'
import {ButtonProps} from './ButtonProps'
import PhysicalTraits from './PhysicalTraits';
import ContactInfo from './ContactInfo';
import PictureInfo from './PictureInfo';

export default function Profile({navigation}){
    const userUID = auth().currentUser.uid
    const [loading, setLoading] = useState(true);

    const onLogout = () => {
          auth()
           .signOut()
           .then(() => console.log('User signed out!'));
    }
    
    useEffect(() => {
      navigation.addListener("focus", () => setLoading(!loading));
    }, [navigation, loading]) 
  
    return (
    <View style={styles.container}>
      <HeaderProp text='Profile' />
      <ScrollView style={{flex:1}}>
        <View style={{flex:1}}>
          <PictureInfo />
          <PhysicalTraits />
          <ContactInfo />
          <View style={styles.editcontainer}>
              <ButtonProps iconname='circle-edit-outline' text='Edit Profile' onPressHandler={()=>navigation.navigate('Edit')}/>
              <ButtonProps iconname='exit-to-app' text='Log Out' onPressHandler={()=>onLogout()}/>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}












































































































