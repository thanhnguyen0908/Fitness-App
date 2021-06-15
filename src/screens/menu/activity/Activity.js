import React, {useState, useEffect} from 'react'
import {View, Text, ScrollView, ImageBackground, FlatList, TouchableOpacity, Alert, Modal, TextInput, Dimensions} from 'react-native'
import {Calendar} from 'react-native-calendars'
import Icon from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { HeaderProp } from '../header/HeaderProp'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import styles from './ActivityStyles'

//todo: tu async storage goi user ra

export default function Activity(){
  const [modalVisible, setModalVisible] = useState(false);
  const [image,setImage] = useState('https://firebasestorage.googleapis.com/v0/b/trial4-f8e32.appspot.com/o/extra.webp?alt=media&token=c4926e7e-4b78-4bea-bbfd-f88b767f160a')

  const [displayName, setDisplayName] = useState([]);
  const [displayEx, setDisplayEx] = useState('')
  const [title, setTitle] = useState('')
  const [subtitle, setSubTitle] = useState('')
  const [description, setDescription] = useState('')
  
  const userUID = auth().currentUser.uid

  const getData = async () => {
    const snapshot = await firestore().collection('users').doc(userUID).get()
    setDisplayName(snapshot.data());
  };

  const onAdd = () => {
    firestore().collection('activity').doc().set({
      title,
      subtitle,
      description
    })
    Alert.alert('Woohoo !', 'Extras Added')
  }

  useEffect(() => {
    getData()
    const subscriber = firestore()
    .collection('activity').orderBy('title',"desc")
    .onSnapshot(querySnapshot => {
      const displayEx = [];

      querySnapshot.forEach(documentSnapshot => {
        displayEx.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });

      setDisplayEx(displayEx);
    });
    return () => subscriber();
  }, [])

  return (
    <View style={styles.container}>
      <HeaderProp text='Activity' />
      <ScrollView style={styles.scroll}>
        <View style={styles.smallcontainer}>
          <Calendar
            // Enable horizontal scrolling, default = false
            horizontal={true}
            // Enable paging on horizontal, default = false
            pagingEnabled={true}
            onDayPress={(day) => {console.log('Selected Day', day)}}

            theme={{
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
            }}
          />
          <View style={styles.textcontainer}>
            <Text style={styles.hello}>Hello, {displayName.fullName}.</Text>
            <Icon name="quote-a-right" size={20} style={styles.quoteright}/>
            <Text>Here's your workout plan for today. Please complete the warm-up, main workout and look down.</Text>
            <Text style={{marginTop: 10}}>Every workout makes you better.</Text>
            <Icon name="quote-a-left" size={20} style={styles.quoteleft}/>
          </View>
          <View style={{flex: 1}}>
            <FlatList 
            horizontal={true}
            data={displayEx}
            renderItem={({ item }) => (
              <TouchableOpacity style={{margin: 10, flex: 1, width: Dimensions.get('screen').width * 0.9}}>
                <ImageBackground style={{flex: 1, flexDirection:'column', justifyContent:'space-between'}} source={{uri: item.imageURL ? item.imageURL : image}}>
                  <View style={{backgroundColor: 'white', borderRadius: 5, width:'40%', margin: 10, height:'20%', alignItems:'center', justifyContent:'center'}}>
                  <Text style={{fontWeight:'bold', fontSize: 16}}>{item.title}</Text>
                  </View>
                  <View style={{margin: 10}}>
                  <Text style={{fontSize: 20, color:'white'}}>{item.subtitle}</Text>
                  <Text style={{fontSize: 20, color:'white'}}>{item.description}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity> 
            )}
            keyExtractor={(_, index) => index.toString()}/>
          </View>
        </View>
      </ScrollView>

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
            <Text style={{marginTop: 10}}>Title:</Text>
            <TextInput style={{borderBottomWidth: 1, width:'80%'}} value={title} onChangeText={(text)=>setTitle(text)}/>
            <Text style={{marginTop: 10}}>Subtitle:</Text>
            <TextInput style={{borderBottomWidth: 1, width:'80%'}} value={subtitle} onChangeText={(text)=>setSubTitle(text)}/>
            <Text style={{marginTop: 10}}>Description:</Text>
            <TextInput style={{borderBottomWidth: 1, width:'80%'}} value={description} onChangeText={(text)=>setDescription(text)}/>
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
  )
}