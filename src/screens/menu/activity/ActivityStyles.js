import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  scroll:{
    flex:1, 
    backgroundColor:'white'
  },
  smallcontainer:{ 
    flex: 1, 
    height: Dimensions.get('screen').height 
  },
  textcontainer:{
    flex:1, 
    alignSelf:'center', 
    marginTop: 30
  },
  hello:{
    fontFamily:'Poppins-Bold', 
    fontSize: 30, 
    marginBottom: 10
  },
  quoteright:{
    alignSelf:'flex-start', 
    color:'#668FF4', 
    marginBottom: 10
  },
  quoteleft:{
    alignSelf:'flex-end', 
    marginTop: 10, 
    color:'#668FF4'
  }
})

export default styles