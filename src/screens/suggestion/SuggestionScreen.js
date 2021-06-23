import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TextInput,Text, TouchableOpacity, FlatList} from 'react-native';
import {kneeing} from '../../assets/image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './SuggestionStyles'
import firestore from '@react-native-firebase/firestore'

export default function SuggestionScreen({navigation}){

  const [displaySuggest, setDisplaySuggest] = useState('')
  const [result, setResult] = useState('')

  // const subscriber = firestore()
  // .collection('suggestion')
  // .onSnapshot(querySnapshot => {
  //   const displaySuggest = [];

  //   querySnapshot.forEach(documentSnapshot => {
  //     displaySuggest.push({
  //       ...documentSnapshot.data(),
  //       key: documentSnapshot.id,
  //     });
  //   });
    
  //   setDisplaySuggest(displaySuggest);
  // });

  // useEffect(() => {
  //   return () => subscriber();
  // }, [])

  const onSearch =() =>{
    firestore()
    .collection('suggestion').where('goal', '==', result)
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
  useEffect(() => {
    onSearch();
  }, [])

  return(
    <View style = {styles.bigcontainer}>
      <View style={styles.imagecontainer}>
        <Image source = {kneeing} style={styles.kneeing}/>
      </View>
      <Text style={styles.welcome}>Suggested Workouts</Text>
      <Text style={styles.underwelcome}>Provided by professional trainers.</Text>
      <View style={{flexDirection:'row', width: '80%', borderColor:'#668FF4', borderWidth: 1, borderRadius: 10, margin: 10}}>
        <TouchableOpacity style={{borderRightWidth: 1, width:'18%', alignItems:'center', justifyContent:'center', borderColor:'#668FF4', backgroundColor:'#668FF4', borderRadius: 8}}>
        <Icon name="search" size={20} color="white" onPress={()=>onSearch()}/>
        </TouchableOpacity>
        <TextInput style={{width: '90%'}}
        placeholder='Search..'
        value={result}
        onChangeText={(text) => setResult(text)}/>
      </View>
      <View style={{flex: 1, width:'80%', margin: 15}}>
        <FlatList 
          data={displaySuggest}
          renderItem={({ item }) => (
            <View style={{backgroundColor:'white', marginBottom: 10, borderRadius: 10, elevation: 5}}>
              <TouchableOpacity style={{flex: 1, padding: 10}} onPress={()=>navigation.navigate('Routine', item)}>
                <Text style={{fontFamily:'Poppins-Bold', color:'black', fontSize: 20}}>{item.title}</Text>
                <Text style={{fontSize: 14}}>{item.description}</Text>
              </TouchableOpacity>
            </View> 
          )}
          keyExtractor={(_, index) => index.toString()}/>
      </View>
    </View>
  );
}  