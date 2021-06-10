import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  kneeing:{
  width: '100%', 
  height: '100%',
  borderRadius: 10 
},
imagecontainer: {
  borderRadius: 10,
  width: '80%',
  height: '30%',
  marginTop: 50,
  elevation: 3,
  alignSelf:'center',
},
bigcontainer:{
  flex:1,
  alignItems:'center' 
},
welcome:{
  fontFamily:'Poppins-Bold', 
  fontSize: 28, 
  marginTop: 10},
underwelcome:{
  fontFamily:'Poppins-Regular', 
  color: '#61B4A5', 
  fontSize: 18,
},
item: {
  flex:1,
  padding: 20,
  marginVertical: 8,
  borderRadius: 5,
},
title: {
  fontSize: 18,
},
})
export default styles