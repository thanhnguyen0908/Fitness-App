import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import firestore from '@react-native-firebase/firestore'

export default function MyPlan (){
  const [displayFood, setDisplayFood] = useState('')
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