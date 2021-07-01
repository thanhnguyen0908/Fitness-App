import React, {useState} from 'react';
import {View, Text, Image, Modal, TouchableOpacity, Alert, TextInput} from 'react-native';
import {manprepare} from '../../assets/image';
import {Props} from './Props';
import styles from './Styles';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { ModalProps } from './ModalProps';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';

function PhysicsScreen({navigation}) {
  const [actionTriggered, setActionTriggered] = useState(''); // Here we go
  const [modalVisible, setModalVisible] = useState(false);
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')

  let bmiscore =  parseFloat((weight / (height*height)).toFixed(2))

  const userUID = auth().currentUser.uid

  const onValidate = async () => {
    firestore()
    .collection('users')
    .doc(userUID).collection('bmi').doc('BmiScore')
    .set({
      height,
      weight,
      gender,
      age
    })
    .then(() => {
      console.log('Info added!');
    });
    try {
        let bmi = {
            Weight: weight,
            Height: height,
            Gender: gender,
            BmiScore: bmiscore,
            Age: age
        }
        await AsyncStorage.setItem('UserData', JSON.stringify(bmi));
    } catch (error) {
        console.log(error);
    }
  console.log('BMI Score:', bmiscore)
  }

  return (
    <View style = {styles.bigcontainer}>
    <View style={styles.imagecontainer}>
      <Image source = {manprepare} style={styles.manprepare}/>
    </View>
    <Text style={styles.welcome}>Physical Information</Text>
    <Text style={styles.underwelcome}>Help us understand better about you.</Text>
    <View style={[styles.container, {marginTop: 10}]} >
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      {actionTriggered === 'Height' ?
        <ModalProps text='By meters' inputValue={height} onChangeTextHandler={(text)=>setHeight(text)} onPressHandler={() => {setModalVisible(!modalVisible); onValidate()}}/>:
      actionTriggered === 'Age' ?
        <ModalProps text='By number' inputValue={age} onChangeTextHandler={(text)=>setAge(text)} onPressHandler={() => {setModalVisible(!modalVisible); onValidate()}}/>:
        actionTriggered === 'Weight' ?
        <ModalProps text='By kilograms' inputValue={weight} onChangeTextHandler={(text)=>setWeight(text)} onPressHandler={() => {setModalVisible(!modalVisible); onValidate()}}/>:
        actionTriggered === 'Gender' ?
        <ModalProps text='Male/Female/Other' inputValue={gender} onChangeTextHandler={(text)=>setGender(text)} onPressHandler={() => {setModalVisible(!modalVisible); onValidate()}}/>:null}
    </Modal>

    <Props addStyle={{justifyContent:'center'}} text='HEIGHT' onPressHandler = {() => {setModalVisible(true), setActionTriggered('Height')}}/>
    <Props addStyle={{justifyContent:'center'}} text='WEIGHT' onPressHandler = {() => {setModalVisible(true), setActionTriggered('Weight')}}/>
    </View>

    <View style={styles.container}>
    <Props text='GENDER' onPressHandler = {() => {setModalVisible(true), setActionTriggered('Gender')}}/>
    <Props text='AGE' onPressHandler = {() => {setModalVisible(true), setActionTriggered('Age')}}/>
    </View>
    <Text style={{fontSize: 16, margin: 5}}>Your BMI score is <Text style={{fontWeight:'bold'}}>{bmiscore}</Text></Text>
    { bmiscore > 24.9 ? <Text style={{fontSize: 16, margin: 5}}>This is considered <Text style={{fontWeight:'bold'}}>Overweight</Text></Text> : bmiscore < 18.5 ? <Text style={{fontSize: 16, margin: 5}}>This is considered <Text style={{fontWeight:'bold'}}>Severely Underweight</Text></Text> : <Text style={{fontSize: 16, margin: 5}}>This is considered <Text style={{fontWeight:'bold'}}>Normal</Text></Text>}
    <View style ={styles.validatecontainer}>
      <TouchableOpacity style= {styles.validatebutton} onPress={() => navigation.navigate('Suggestion')}>
        <Text style={styles.validatetext}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}} onPress={()=>navigation.navigate('Menu')}>
        <Text style={{fontFamily:'Poppins-Regular', fontSize: 16, color:'gray'}}>Skip</Text>
        <MaterialCommunityIcons name='arrow-right' size={30} style={{color:'gray'}}/>
      </TouchableOpacity>
    </View>
    </View>
  );
}
export default PhysicsScreen 






