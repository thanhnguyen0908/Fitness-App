import React, {useEffect, useState} from 'react'
import {View, Text, Image, ScrollView} from 'react-native' 
import { TouchableOpacity } from 'react-native-gesture-handler'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import ImagePicker from 'react-native-image-crop-picker'
import { TextInput } from 'react-native-paper'

export default function EditProfile({navigation}){
  const [fullName, setFullName] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [gender, setGender] = useState('')
  
  const userUID = auth().currentUser.uid
  const [displayInfo, setDisplayInfo] = useState([]);

  const getData = async () => {

  const snapshot = await firestore().collection('users').doc(userUID).get()
  setDisplayInfo(snapshot.data());
  };

  const onDone = () => {
    firestore() .collection('users')
    .doc(userUID)
    .update({
    weight,
    fullName,
    height,
    gender,
    phoneNum
    })
  }

  const [image,setImage] = useState('https://i1.wp.com/lucloi.vn/wp-content/uploads/2020/08/b73-1.jpg?fit=800%2C462&ssl=1')

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  }

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then(image => {
      console.log(image)
      setImage(image.path)
    })
  }
  
  const uploadImage = async () => {
    const uploadUri = image
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/')+1)
    
    try {
      await storage().ref(filename).putFile(uploadUri);
      const url = await storage().ref(filename).getDownloadURL();
      setDisplayInfo({...displayInfo, img: url});
      console.log(url)
      firestore() .collection('users')
      .doc(userUID)
      .update({
      img: url,
      })
    } catch(e) {
      console.log(e)
    }
  }
  
  useEffect(() => {
    getData() 
  }, []);
    
  return (
  <View style={{flex: 1}}>
    <View style={{alignItems:'center', backgroundColor:'#4A7DFC', flex: 1, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
      <View style={{width: '40%', height:'80%', margin: 20, flex: 3}}>
      <Image source={{uri: displayInfo.img
                      ? displayInfo.img
                      : image}} style={{flex: 1, borderRadius:10}} />
      </View>
      <View style={{flexDirection: 'row', flex: 1}}>
        <TouchableOpacity style={{backgroundColor:'white', padding: 10, borderRadius: 5}} onPress={()=>takePhotoFromCamera()}>
          <Text>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'white', padding: 10, marginLeft: 5, marginRight: 5, borderRadius: 5}} onPress={()=>choosePhotoFromLibrary()}>
          <Text>Choose Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'white', padding: 10, borderRadius: 5}} onPress={()=>uploadImage()}>
          <Text>Upload Photo</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={{flex: 2, alignItems:'center'}}>
      <View style={{flexDirection:'row', width: '80%', alignItems:'center', marginTop: 20}}>
        <Text style={{width:'25%', textAlign:'center'}}>Weight:</Text>
        <TextInput style={{flex:1}} value={weight} onChangeText={(text)=>setWeight(text)} keyboardType='numeric' />
      </View>
      <View style={{flexDirection:'row', width: '80%', alignItems:'center'}}>
        <Text style={{width:'25%', textAlign:'center'}}>Height:</Text>
        <TextInput style={{flex:1}} value={height} onChangeText={(text)=>setHeight(text)} keyboardType='numeric'/>
      </View>
      <View style={{flexDirection:'row', width: '80%', alignItems:'center'}}>
        <Text style={{width:'25%', textAlign:'center'}}>Gender:</Text>
        <TextInput style={{flex:1}} value={gender} onChangeText={(text)=>setGender(text)}/>
      </View>
      <View style={{flexDirection:'row', width: '80%', alignItems:'center', marginTop: 20}}>
        <Text style={{width:'25%', textAlign:'center'}}>Full Name:</Text>
        <TextInput style={{flex:1}} value={fullName} onChangeText={(text)=>setFullName(text)}/>
      </View>
      <View style={{flexDirection:'row', width: '80%', alignItems:'center'}}>
        <Text style={{width:'25%', textAlign:'center'}}>Phone:</Text>
        <TextInput style={{flex:1}} value={phoneNum} onChangeText={(text)=>setPhoneNum(text)} keyboardType='numeric'/>
      </View>
    </View>
      <TouchableOpacity style={{backgroundColor:'#4A7DFC', padding: 10, marginBottom: 30, borderRadius: 5, width:'50%', alignSelf:'center', alignItems:'center'}} onPress={()=> {onDone(), navigation.navigate('Menu')}}>
        <Text style={{color:'white'}}>Done</Text>
      </TouchableOpacity>
  </View>
  )
}