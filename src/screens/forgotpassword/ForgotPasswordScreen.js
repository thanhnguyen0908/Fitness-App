import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextInput } from 'react-native-gesture-handler';


export default function ForgotPasswordScreen({navigation}) {
  const [email, setEmail] = useState('');

  const onReset = async() => {
    try {
        await auth().sendPasswordResetEmail(email);
    } catch (e) {
        Alert.alert(
            e.message
        );
    }
  };
  return (
    <View style={styles.container}>
        <View style={styles.formContainer}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ fontSize: 30, fontFamily:'Poppins-Bold'  }}>Reset Password !</Text>
            </View>
            <View style={styles.subContainer}>
                <TextInput
                    style={{borderBottomWidth: 1, borderColor: '#4A7DFC'}}
                    placeholder='Your Email'
                    leftIcon={
                        <MaterialCommunityIcons
                        name='email'
                        size={24}
                        />
                    }
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <View style={styles.subContainer}>
                <Button
                    style={styles.textInput}
                    title="Reset"
                    onPress={() => onReset()} />
            </View>
            <View style={styles.subContainer}>
                <Button
                    style={styles.textInput}
                    title="Back to Signin"
                    onPress={() => {
                        navigation.navigate('Signin');
                    }} />
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'white'
  },
  formContainer: {
      height: 400,
      padding: 20
  },
  subContainer: {
      marginBottom: 20,
      padding: 5,
  },
  activity: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
  },
  textInput: {
      fontSize: 18,
      margin: 5,
      width: '50%',
      borderRadius: 10
  },
})