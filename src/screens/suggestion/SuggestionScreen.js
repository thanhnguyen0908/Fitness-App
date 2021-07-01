import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TextInput,Text, TouchableOpacity, FlatList} from 'react-native';
import {kneeing} from '../../assets/image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './SuggestionStyles'
import firestore from '@react-native-firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SuggestionScreen({navigation}){

  const [displaySuggest, setDisplaySuggest] = useState('')
  const [result, setResult] = useState('')
  const [getBmi, setGetBmi] = useState('')
  const [loading, setLoading] = useState(true)

  const onGetBmi = async () => {
    try {
      AsyncStorage.getItem('UserData')
          .then(value => {
              if (value != null) {
                  let bmi = JSON.parse(value);
                  setGetBmi(bmi.BmiScore);
                  }
              })
      } catch (error) {
          console.log(error);
      }
  };

  
  
  const onDisplay = async () => {
    if (result) {
      firestore()
      .collection('suggestion').where('title', '==', result)
          .onSnapshot(querySnapshot => {
            const displaySuggest = [];
            
            querySnapshot.forEach(documentSnapshot => {
              displaySuggest.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
              });
            });
            setDisplaySuggest(displaySuggest);
          });
    }
    else if (0 < getBmi && getBmi < 18.4) {
    firestore()
      .collection('suggestion').where('bmi', '<', 18.4)
      .onSnapshot(querySnapshot => {
        const displaySuggest = [];

        querySnapshot.forEach(documentSnapshot => {
          displaySuggest.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setDisplaySuggest(displaySuggest);
      });
    }
    else if (getBmi > 24.9 )
    {
      firestore()
      .collection('suggestion').where('bmi', '>', 24.9)
      .onSnapshot(querySnapshot => {
        const displaySuggest = [];
        
        querySnapshot.forEach(documentSnapshot => {
          displaySuggest.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setDisplaySuggest(displaySuggest);
      });
    }
    else if ( 18.5 < getBmi && getBmi < 24.8)
    {
      firestore()
      .collection('suggestion').orderBy('bmi').startAt(18.5).endAt(24.8)
      .onSnapshot(querySnapshot => {
        const displaySuggest = [];

        querySnapshot.forEach(documentSnapshot => {
          displaySuggest.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setDisplaySuggest(displaySuggest);
      });
    }
    else {
      return null
    }
  }
  
  useEffect(() => {
    onGetBmi()
    onDisplay()
    navigation.addListener("focus", () => setLoading(!loading));
  }, [navigation, loading]) 

  return(
    <View style = {styles.bigcontainer}>
      <View style={styles.imagecontainer}>
        <Image source = {kneeing} style={styles.kneeing}/>
      </View>
      <Text style={styles.welcome}>Suggested Workouts</Text>
      <Text style={styles.underwelcome}>Based on your BMI Result.</Text>
      <View style={{flexDirection:'row', width: '80%', borderColor:'#668FF4', borderWidth: 1, borderRadius: 10, margin: 10}}>
        <TouchableOpacity style={{borderRightWidth: 1, width:'18%', alignItems:'center', justifyContent:'center', borderColor:'#668FF4', backgroundColor:'#668FF4', borderRadius: 8 }} onPress={()=>onDisplay()}>
        <Icon name="search" size={20} color="white" />
        </TouchableOpacity>
        <TextInput style={{width: '90%'}}
        placeholder='Filter...'
        value={result}
        onChangeText={(text) => setResult(text)}/>
      </View>
      <View style={{flex: 1, width:'80%', margin: 15}}>
        <FlatList 
          data={displaySuggest}
          renderItem={({ item }) => (
            <View style={{backgroundColor:'white', marginBottom: 5, borderRadius: 5, elevation: 5}}>
              <TouchableOpacity style={{flex: 1, padding: 10}} onPress={()=>navigation.navigate('Routine', item)}>
                <Text style={{fontFamily:'Poppins-Bold', color:'black', fontSize: 20}}>{item.title}</Text>
                <Text style={{fontSize: 16, color:'gray'}}>{item.shortsummary}</Text>
              </TouchableOpacity>
            </View> 
          )}
          keyExtractor={(_, index) => index.toString()}/>
      </View>
    </View>
  );
}  