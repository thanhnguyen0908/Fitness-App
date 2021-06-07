import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container:{
    alignItems:'center', 
    flex: 1,
    backgroundColor:'white' 
  },
  image:{
    width: '25%', 
    height: '11%', 
    marginTop: 100,
  },
  welcome:{
    fontFamily:'Poppins-Bold',
    fontSize: 30
  },
  underwelcome:{
    fontFamily:'Poppins-Regular',
    color: '#61B4A5',
    fontSize: 18,
  },
  alignforgot:{
    flexDirection:'row',
    alignSelf:'flex-end', 
    marginTop: 10, 
    marginRight: 40},
  forgotpassword:{
    color: '#668FF4',
    fontSize: 16,
  },
  buttoncontainer:{
    marginTop: 30, 
    backgroundColor: '#668FF4', 
    width: '80%', 
    padding: 10, 
    borderRadius: 10},
  buttontext:{
    color:'white', 
    textAlign: 'center',
    fontWeight:'bold',
    fontSize:18
  },
  underbuttoncontainer:{
    marginTop: 10, 
    flexDirection:'row'
  },
  underbuttontext:{
      fontFamily:'Lato-Regular', 
      fontSize: 16
  },
})

export default styles