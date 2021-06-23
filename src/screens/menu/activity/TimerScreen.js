import React, {useState, useEffect} from 'react'
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native'
import {bars} from '../../../assets/image'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function TimerScreen({navigation}){
  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);
  
  const stopTimer = () => {
    setIsActive(false);
    setCounter(0);
    setSecond('00');
    setMinute('00')
  }

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter(counter => counter + 1);
      }, 1000)
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter])

  return(
    <View style={{flex: 1}}>
      <ImageBackground source={bars} style={{flex: 1}} >
        <MaterialCommunityIcons name='arrow-left' size={40} style={{margin: 20, color:'white'}} onPress={()=>navigation.navigate('Detail')}/>
        <MaterialCommunityIcons name='av-timer' size={40} style={{marginTop: 50, color:'white', alignSelf:'center'}}/>
        <View style={{flexDirection:'row', width:'80%', justifyContent:'space-evenly', alignSelf:'center'}}>
          <TouchableOpacity onPress={() => setIsActive(!isActive)} style={{backgroundColor:'#668FF4', alignItems:'center', borderRadius: 10, width:'25%'}}>
            <Text style={{padding: 20, fontFamily:'Oswald-SemiBold', color:'white', fontSize: 16}}>Start</Text>
          </TouchableOpacity>
          <Text style={{fontFamily:'Oswald-Bold', fontSize: 40, color:'white'}}>{minute}:{second}</Text>
          <TouchableOpacity onPress={stopTimer} style={{backgroundColor:'#668FF4', alignItems:'center', borderRadius: 10, width:'25%'}}>
            <Text style={{padding: 20, fontFamily:'Oswald-SemiBold', color:'white', fontSize: 16}}>Reset</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}