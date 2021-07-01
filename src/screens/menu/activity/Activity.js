import React, {useState, useEffect} from 'react'
import {View, Text, ScrollView, ImageBackground, FlatList, TouchableOpacity, Alert, Modal, TextInput, Dimensions, ActivityIndicator} from 'react-native'
import {Calendar} from 'react-native-calendars'
import Icon from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { HeaderProp } from '../header/HeaderProp'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import styles from './ActivityStyles'
import moment from 'moment'
import AsyncStorage from '@react-native-async-storage/async-storage'

//todo: tu async storage goi user ra

export default function Activity({navigation}){
  const [modalVisible, setModalVisible] = useState(false);
  const [image,setImage] = useState('https://firebasestorage.googleapis.com/v0/b/trial4-f8e32.appspot.com/o/extra.webp?alt=media&token=c4926e7e-4b78-4bea-bbfd-f88b767f160a')
  const [displayName, setDisplayName] = useState([]);
  const [displayEx, setDisplayEx] = useState('')
  const [textbox, setTextBox] = useState('')
  const [longdescript, setLongDescript] = useState('')
  const [rep, setRep] = useState('')
  const [loading, setLoading] = useState(true)
  const [someid, setSomeID] = useState('')
  const [loadingData, setLoadingData] = useState(false);

  const startLoadingData = () => {
    setLoadingData(true);
  };

  const userUID = auth().currentUser.uid

  const getData = async () => {
    const snapshot = await firestore().collection('users').doc(userUID).get()
    setDisplayName(snapshot.data());
      try {
        AsyncStorage.getItem('Ex')
            .then(value => {
                if (value != null) {
                    let passdata = JSON.parse(value);
                    setSomeID(passdata.ID);
                }
            })
    } catch (error) {
        console.log(error);
    }
    console.log('Get ID', someid)
  };

  const getEx = () => {
    const subscriber = firestore()
    .collection('suggestion').where('id', '==', someid)
    .onSnapshot(querySnapshot => {
      const displayEx = [];
      querySnapshot.forEach(documentSnapshot => {
        displayEx.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });
      setDisplayEx(displayEx);
      setLoadingData(false)
    });
    return () => subscriber();
  }

  const onAdd = () => {
    firestore().collection('suggestion').doc().set({
      textbox,
      longdescript,
      rep,
      id: someid
    })
    Alert.alert('Woohoo !', 'Extras Added')
  }

  const today = moment().format("YYYY-MM-DD");
  const mark = {
		[today]: {selected: true, marked: true}
	};

  useEffect(() => {
    startLoadingData();
    getData();
    getEx();
    navigation.addListener("focus", () => setLoading(!loading));
  }, [navigation, loading]) 

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
            markedDates={mark}
            theme={{
              selectedDayBackgroundColor: '#668FF4',
              selectedDayTextColor: '#ffffff',
            }}
          />
          <View style={styles.textcontainer}>
            <Text style={styles.hello}>Hello, {displayName.fullName}</Text>
            <Icon name="quote-a-right" size={20} style={styles.quoteright}/>
            <Text style={{fontSize: 14}}>Here's your workout plan according to the program. Please complete the warm-up, main workout and look down.</Text>
            <Text style={{marginTop: 10}}>Every workout makes you better.</Text>
            <Icon name="quote-a-left" size={20} style={styles.quoteleft}/>
          </View>
          <TouchableOpacity style={{padding: 10, margin: 10, elevation: 5, backgroundColor:'#668FF4', width:'20%', borderRadius: 5}} onPress={()=>startLoadingData()}>
            <Text style={{fontSize: 16, color: 'white', textAlign:'center'}}>Show</Text>
          </TouchableOpacity>
          <View style={{flex: 1}}>
          {loadingData ? (
              <Text style={{margin: 10}}>Loading...</Text>
            ) : (
              <>
            <FlatList 
            horizontal={true}
            data={displayEx}
            renderItem={({ item }) => (
              <TouchableOpacity style={{margin: 10, flex: 1, width: Dimensions.get('screen').width * 0.9}} onPress={()=>navigation.navigate('Detail', item)}>
                <ImageBackground style={{flex: 1, flexDirection:'column', justifyContent:'space-between'}} source={{uri: item.imageURL ? item.imageURL : image}}>
                  <View style={{backgroundColor: 'white', borderRadius: 5, width:'40%', margin: 10, height:'20%', alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold', fontSize: 16}}>{item.textbox}</Text>
                  </View>
                  <View style={{margin: 10}}>
                    <Text style={{fontSize: 20, color:'white'}}>{item.subtext}</Text>
                    <Text style={{fontSize: 20, color:'white'}}>{item.shortdescript}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity> 
            )}
            keyExtractor={(_, index) => index.toString()}/>
              </>
            )}
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
            <TextInput style={{borderBottomWidth: 1, width:'80%'}} value={textbox} onChangeText={(text)=>setTextBox(text)}/>
            <Text style={{marginTop: 10}}>Exercises:</Text>
            <TextInput style={{borderBottomWidth: 1, width:'80%'}} value={longdescript} onChangeText={(text)=>setLongDescript(text)}/>
            <Text style={{marginTop: 10}}>Reps:</Text>
            <TextInput style={{borderBottomWidth: 1, width:'80%'}} value={rep} onChangeText={(text)=>setRep(text)}/>
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