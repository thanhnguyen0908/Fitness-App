import React, {useState, useEffect} from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function DetailScreen({route, navigation}){
  const data = route.params
  const [image,setImage] = useState('https://firebasestorage.googleapis.com/v0/b/trial4-f8e32.appspot.com/o/extra.webp?alt=media&token=c4926e7e-4b78-4bea-bbfd-f88b767f160a')

  useEffect(() => {
  }, [])

  return(
    <View style={{flex: 1, justifyContent:'center'}}>
      <Icon name='arrow-back' size = {23} style={{marginLeft: 10, marginTop: 20, marginBottom: 20}} onPress={()=>navigation.navigate('Menu')}/>
      <Image source={{uri: data.imageURL ? data.imageURL : image}} style={{flex: 1, borderRadius: 10, width:'95%', alignSelf:'center'}}/>
      <View style={{flex: 1, margin: 15}}>
        <Text style={{fontSize: 30, fontFamily:'Poppins-Bold'}}>
          {data.textbox}
        </Text>
        <Text style={{fontSize: 18, marginLeft: 10}}>
          {data.longdescript}
        </Text>
        {data.rep ? <Text style={{fontSize: 18, margin: 10}}>
          {data.rep} reps
        </Text> : null }
        { data.timer ? <Text style={{fontSize: 18, marginLeft: 10}}>
          {data.timer}
        </Text> : null }
        <TouchableOpacity style={{alignSelf:'center', padding: 20, backgroundColor:'#668FF4', borderRadius: 10, width:'50%', marginTop: 80}} onPress={()=>navigation.navigate('Timer')}>
          <Text style={{color:'white', fontFamily:'Poppins-Bold', textAlign:'center'}}>Start Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}