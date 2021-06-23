import React, {useEffect,useState} from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import firestore from '@react-native-firebase/firestore'

export default function AllFood(){
  const [displayFood, setDisplayFood] = useState('')
  useEffect(() => {
  const subscriber = firestore()
    .collection('diet').orderBy('id')
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
  return (
    <View style={{flex: 1}}>
      <View style={{marginTop: 20, marginBottom: 20}}>
        <Text style={{fontFamily:'Poppins-Bold', fontSize: 30 }}>Heads Up !</Text>
        <Text style={{fontSize: 16, marginTop: 10}}>Happy hour incoming.</Text>
      </View>
      <View style={{flex: 1, justifyContent:'center'}}>
              <FlatList 
                data={displayFood}
                renderItem={({ item }) => (
                  <View style={{backgroundColor:'white', marginBottom: 10, borderRadius: 10, elevation: 5}}>
                    <TouchableOpacity style={{flex: 1, padding: 10}}>
                      <Text style={{fontFamily:'Poppins-Regular', color:'#4A7DFC', fontSize: 20}}>{item.food}</Text>
                    </TouchableOpacity>
                  </View> 
                )}
                keyExtractor={(_, index) => index.toString()}/>
      </View>
    </View>
  )
}