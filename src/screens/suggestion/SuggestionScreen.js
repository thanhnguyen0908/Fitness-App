import React, {useState} from 'react';
import {View, StyleSheet, Image, TextInput,Text, TouchableOpacity, FlatList} from 'react-native';
import {kneeing} from '../../assets/image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './SuggestionStyles'

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

export default function SuggestionScreen({navigation}){
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#419DFC" : "white";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => {setSelectedId(item.id); navigation.navigate('Routine')}}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return(
    <View style = {styles.bigcontainer}>
      <View style={styles.imagecontainer}>
        <Image source = {kneeing} style={styles.kneeing}/>
      </View>
      <Text style={styles.welcome}>Suggested Workouts</Text>
      <Text style={styles.underwelcome}>Provided by professional trainers.</Text>
      <View style={{flexDirection:'row', width: '80%', borderBottomColor:'#417DFC', borderBottomWidth: 1}}>
      <Icon name="search" size={20} color="black" style={{marginTop: 13}}/>
      <TextInput style={{width: '93%'}}
      placeholder='Search..'/>
      </View>
      <View style={{flex:1, width: '80%', marginTop: 10}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      </View>
    </View>
  );
}  