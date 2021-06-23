import React, {useState, useEffect} from 'react';
import {View,TextInput, FlatList, Text, TouchableOpacity, Modal, Alert, Pressable} from 'react-native'
import { HeaderProp } from '../header/HeaderProp';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import firestore from '@react-native-firebase/firestore'
import styles from './DietStyles'
import MyPlan from './MyPlan'
import AllFood from './AllFood'

export default function Diet() {
  const [modalVisible, setModalVisible] = useState(false);
  const [timeday, setTimeDay] = useState('')
  const [food, setFood] = useState('')
  const [amount, setAmount] = useState('')
  const timestamp = firestore.FieldValue.serverTimestamp();
  const [actionTriggered, setActionTriggered] = useState('')

 
  const onAdd = () => {
    firestore().collection('diet').doc().set({
      food,
      timeday,
      amount,
      createdAt: timestamp
    })
    Alert.alert('Woohoo !', 'Extras Added')
  }

  useEffect(() => {
  }, [])


  return (
    
    <View style={{flex:1, backgroundColor:'white'}}>
      <HeaderProp text='Diet' />
      <View style={{flex:1, width: '90%', alignSelf: 'center'}}>
          <View style={{flexDirection:'row', marginTop: 20, justifyContent:'space-evenly', width: '90%', height:'5%'}}>
            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? '#4A7DFC' : 'white' }, styles.stylebtn ]} onPress={()=>setActionTriggered('My Plan')}>
              {({ pressed }) => (
                <Text style={{ color: pressed ? 'white' : 'black', fontWeight:'bold'}}>My Plan</Text>
              )}
            </Pressable>
            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? '#4A7DFC' : 'white' }, styles.stylebtn ]} onPress={()=>setActionTriggered('All Food')}>
              {({ pressed }) => (
              <Text style={{ color: pressed ? 'white' : 'black', fontWeight:'bold'}}>All Food</Text>
              )}
            </Pressable>
          </View>
          {actionTriggered === 'My Plan' ?
          <MyPlan />:
          actionTriggered === 'All Food' ? 
          <AllFood />: 
          <MyPlan /> }
      </View> 
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
      >
          <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{marginTop: 10}}>Time Of Day:</Text>
            <TextInput style={{borderBottomWidth: 1, width:'80%'}} value={timeday} onChangeText={(text)=>setTimeDay(text)}/>
            <Text style={{marginTop: 10}}>Food:</Text>
            <TextInput style={{borderBottomWidth: 1, width:'80%'}} value={food} onChangeText={(text)=>setFood(text)}/>
            <Text style={{marginTop: 10}}>Amount:</Text>
            <TextInput style={{borderBottomWidth: 1, width:'80%'}} value={amount} onChangeText={(text)=>setAmount(text)}/>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible), onAdd()}}>
              <Text style={styles.textStyle}>Add Extra</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={{position: 'absolute',width: 60,height: 60,alignItems: 'center',justifyContent: 'center',right: 30,bottom: 30, backgroundColor:'#4A7DFC', borderRadius: 60/2}}  onPress={() => setModalVisible(true)}>
        <MaterialCommunityIcons name="plus" color='white' size={30}/>
      </TouchableOpacity>
    </View>
  );
}