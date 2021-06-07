import React, { useState }  from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {dumbell} from '../../assets/image';
import {Props} from './Props';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import styles from './SignupStyles';

function SignupScreen({ navigation }) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [phoneNum, setPhoneNum] = useState('')



  const onFooterLinkPress = () => {
  navigation.navigate('Signin')
  }

  const onRegisterPress = () => {
  if (password !== confirmPassword) {
  alert("Passwords don't match.")
  return
  }
  if (email === '' || password === '' || fullName ==='' || confirmPassword ==='' || phoneNum ==='') {
  alert('Please fill in all your informations')
  }
  else {
  auth()
  .createUserWithEmailAndPassword(email, password)
  .then((response) => {
      const uid = response.user.uid
      const data = {
          id: uid,
          email,
          fullName,
          phoneNum
      };
      const usersRef = firestore().collection('users')
      usersRef
          .doc(uid)
          .set(data)
          .then(() => {
              navigation.navigate('Physics', {user: data})
          })
          .catch((error) => {
              console.log(error)
          });
  })
  .catch((error) => {
      console.log(error)
    });
  }
}

  return (
    <View style = {styles.container}>
      <Image source ={dumbell} style = {styles.image}/>
      <Text style = {styles.welcome}>Welcome Onboard !</Text>
      <Text style = {styles.underwelcome}>Let's get you set up.</Text>
      <Props
        text='Full name' 
        inputStyle={{marginTop: 15}} 
        isLength={26}
        listenerChangeText={(text) => setFullName(text)} 
        inputValue={fullName}/>
      <Props 
        text='Email' 
        isLength={30} 
        inputStyle={{marginTop: 10}}
        listenerChangeText={(text) => setEmail(text)} 
        inputValue={email}/>
      <Props 
        text='Password' 
        isLength={12} 
        isSecurity={true} 
        inputStyle={{marginTop: 10}}
        listenerChangeText={(text) => setPassword(text)} 
        inputValue={password}/>
      <Props 
        text='Confirm Password' 
        isLength={12} 
        isSecurity={true} 
        inputStyle={{marginTop: 10}}
        listenerChangeText={(text) => setConfirmPassword(text)} 
        inputValue={confirmPassword}/>
      <Props 
        text='Phone Number' 
        isKeyboard={'numeric'} 
        isLength={10} 
        inputStyle={{marginTop: 10}}
        listenerChangeText={(text) => setPhoneNum(text)}
        inputValue={phoneNum} 
        isKeyboard={'numeric'}/>
      <Text style={styles.phonecaution}>Please insert the phone number {'\n'} starting with 0. Ex: 012-</Text>
      <TouchableOpacity style = {styles.buttoncontainer}  onPress={() => onRegisterPress()}>
        <Text style= {styles.buttontext}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.underbuttoncontainer} onPress={onFooterLinkPress}>
            <Text style={styles.underbutton}>Already have an account ? </Text>
            <Text style={[{color:'#668FF4'},styles.underbutton]}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
export default SignupScreen   