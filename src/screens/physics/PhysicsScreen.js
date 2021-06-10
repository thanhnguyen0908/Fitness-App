import React, {useState} from 'react';
import {View, Text, Image, Modal, TouchableOpacity, Alert, TextInput} from 'react-native';
import {manprepare} from '../../assets/image';
import {Props} from './Props';
import styles from './Styles';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { ModalProps } from './ModalProps';

function PhysicsScreen({navigation}) {
  const [actionTriggered, setActionTriggered] = useState(''); // Here we go
  const [modalVisible, setModalVisible] = useState(false);
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [amount, setAmount] = useState('')
  const [gender, setGender] = useState('')
  const [level, setLevel] = useState('')
  const [goal, setGoal] = useState('')
  const userUID = auth().currentUser.uid

  const onValidate = () => {
  firestore()
  .collection('users')
  .doc(userUID)
  .update({
    height,
    weight,
    amount,
    gender,
    level,
    goal
  })
  .then(() => {
    console.log('Info added!');
  });
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
      <ModalProps text='By centimeters' inputValue={height} onChangeTextHandler={(text)=>setHeight(text)} onPressHandler={() => {setModalVisible(!modalVisible); onValidate()}}/>:
        actionTriggered === 'Weight' ?
        <ModalProps text='By kilograms' inputValue={weight} onChangeTextHandler={(text)=>setWeight(text)} onPressHandler={() => {setModalVisible(!modalVisible); onValidate()}}/>:
        actionTriggered === 'Consumption Amount' ?
        <ModalProps text='Meals per day' inputValue={amount} onChangeTextHandler={(text)=>setAmount(text)} onPressHandler={() => {setModalVisible(!modalVisible); onValidate()}}/>:
        actionTriggered === 'Gender' ?
        <ModalProps text='Male/Female/Other' inputValue={gender} onChangeTextHandler={(text)=>setGender(text)} onPressHandler={() => {setModalVisible(!modalVisible); onValidate()}}/>:
        actionTriggered === 'Level' ?
        <ModalProps text='Lazy/Normal/Energetic' inputValue={level} onChangeTextHandler={(text)=>setLevel(text)} onPressHandler={() => {setModalVisible(!modalVisible); onValidate()}}/>:
        actionTriggered === 'Goal' ?
        <ModalProps text='Lose/Fit/Gain' inputValue={goal} onChangeTextHandler={(text)=>setGoal(text)} onPressHandler={() => {setModalVisible(!modalVisible); onValidate()}}/>:
          null}
    </Modal>

    <Props addStyle={{justifyContent:'center'}} text='HEIGHT' onPressHandler = {() => {setModalVisible(true), setActionTriggered('Height')}}/>
    <Props addStyle={{justifyContent:'center', width:'92%'}} text='CONSUMPTION AMOUNT' onPressHandler = {() => {setModalVisible(true), setActionTriggered('Consumption Amount')}}/>
    <Props addStyle={{justifyContent:'center'}} text='WEIGHT' onPressHandler = {() => {setModalVisible(true), setActionTriggered('Weight')}}/>
    </View>

    <View style={styles.container}>
    <Props text='GENDER' onPressHandler = {() => {setModalVisible(true), setActionTriggered('Gender')}}/>
    <Props text={`ACTIVITY\nLEVEL`} onPressHandler = {() => {setModalVisible(true), setActionTriggered('Level')}}/>
    <Props text='GOAL' onPressHandler = {() => {setModalVisible(true), setActionTriggered('Goal')}}/>      
    </View>

    <View style ={styles.validatecontainer}>
      <TouchableOpacity style= {styles.validatebutton} onPress={()=> navigation.navigate('Suggestion')}>
        <Text style={styles.validatetext}>Validate</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}
export default PhysicsScreen 






