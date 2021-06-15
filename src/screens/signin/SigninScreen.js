import React, { useState }  from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {dumbell} from '../../assets/image';
import {Props} from './Props';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import styles from './SigninStyles'

function SigninScreen({ navigation }) {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')



const onFooterLinkPress = () => {
navigation.navigate('Signup')
}

const onLoginPress = () => {
  if (email === '' || password === '') {
    alert('Invalid credentials')
  }
  else {
  auth()
  .signInWithEmailAndPassword(email, password)
  .then((response) => {
    const uid = response.user.uid
    const usersRef = firestore().collection('users')
    usersRef
    .doc(uid)
    .get()
    .then(documentSnapshot => {
      if (!documentSnapshot.exists) {
        alert("Invalid credentials.")
        return;
      }
      const user = documentSnapshot.data()
      //todo: dung asyncstorage de luu user
      navigation.navigate('Menu', {user})
  })
  .catch(error => {
      console.log(error)
  });
})
  .catch(error => {
      console.log(error)
      alert("Invalid credentials")
  })
}
}

return (
  <View style = {styles.container}>
    <Image source ={dumbell} style = {styles.image}/>
    <Text style = {styles.welcome}>Hey There !</Text>
    <Text style = {styles.underwelcome}>Just one more step before we get in.</Text>
    <Props 
    text = 'Email' 
    inputStyle = {{marginTop: 30}} 
    isLength={25} 
    listenerChangeText={(text) => setEmail(text)} 
    inputValue={email}/>
    <Props 
    text = 'Password' 
    inputStyle = {{marginTop: 30}} 
    isLength={12} isSecurity={true} 
    listenerChangeText={(text) => setPassword(text)} 
    inputValue={password}
    />
    <TouchableOpacity style = {styles.alignforgot}>
          <Icon name="lock" size={20} color="#668FF4" />
          <Text style={styles.forgotpassword} >Forgot Password ?</Text>
    </TouchableOpacity>
    <TouchableOpacity style = {styles.buttoncontainer} onPress={() => onLoginPress()}>
      <Text style= {styles.buttontext}>Sign In</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.underbuttoncontainer}  onPress={onFooterLinkPress}>
          <Text style={styles.underbuttontext}>Don't have an account ? </Text>
          <Text style={[{color:'#668FF4'},styles.underbuttontext]}>Sign Up</Text>
    </TouchableOpacity>
  </View>
);
}
export default SigninScreen 
