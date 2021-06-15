import React, {useState, useEffect} from 'react';
import {View,TextInput, FlatList, Text, TouchableOpacity, Modal, Alert, Pressable} from 'react-native'
import { HeaderProp } from '../header/HeaderProp';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import firestore from '@react-native-firebase/firestore'
import styles from './DietStyles'



export default function Diet() {
  const [modalVisible, setModalVisible] = useState(false);
  const [timeday, setTimeDay] = useState('')
  const [food, setFood] = useState('')
  const [amount, setAmount] = useState('')
  const [displayFood, setDisplayFood] = useState('')
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
    const subscriber = firestore()
    .collection('diet').orderBy('createdAt')
    .onSnapshot(querySnapshot => {
      const displayFood = [];

      querySnapshot.forEach(documentSnapshot => {
        displayFood.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });
      
      setDisplayFood(displayFood);
    });
    return () => subscriber();
  }, [])

  const MyPlan = ()=>{
    return(
      <View style={{flex: 1}}>
              <View style={{marginTop: 20, marginBottom: 20}}>
                <Text style={{fontFamily:'Poppins-Bold', fontSize: 30 }}>Hi Again !</Text>
                <Text style={{fontSize: 16, marginTop: 10}}>Take a peek at your designed workout plan.</Text>
                <Text style={{fontFamily:'Poppins-Bold', fontSize: 16, color:'#668FF4', marginTop: 20}}>This week</Text>
              </View>
              <View style={{flex: 1, justifyContent:'center'}}>
                <FlatList 
                  data={displayFood}
                  renderItem={({ item }) => (
                    <View style={{backgroundColor:'white', marginBottom: 10, borderRadius: 10, elevation: 5}}>
                      <TouchableOpacity style={{flex: 1, padding: 10}}>
                        <Text style={{fontFamily:'Poppins-Regular', color:'#4A7DFC', fontSize: 20}}>{item.timeday}</Text>
                        <Text style={{fontFamily:'Poppins-Regular', fontSize: 16}}>{item.amount} {item.food}(s)</Text>
                      </TouchableOpacity>
                    </View> 
                  )}
                  keyExtractor={(_, index) => index.toString()}/>
              </View>
            </View>
    )
  }

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
          <View style={{flex: 1}}>
            <View style={{marginTop: 20, marginBottom: 20}}>
              <Text style={{fontFamily:'Poppins-Bold', fontSize: 30 }}>Heads Up !</Text>
              <Text style={{fontSize: 16, marginTop: 10}}>Happy hour incoming.</Text>
            </View>
          </View>: 
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