import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    alignItems:'center', 
    flex: 1,
    backgroundColor:'white' 
  },
  image:{
    width: '25%', 
    height: '11%', 
    marginTop: 100
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
  phonecaution:{
    textAlign:'center', 
    color:'#668FF4', 
    fontFamily:'Lato-Bold', 
    marginTop: 15, 
    fontSize: 18
  },
  buttoncontainer:{
    marginTop: 10, 
    backgroundColor: '#668FF4', 
    width: '40%', 
    padding: 10, 
    borderRadius: 10},
  buttontext:{
    color:'white', 
    textAlign: 'center',
    fontWeight:'bold',
    fontSize: 18
  },
  underbuttoncontainer:{
    marginTop: 10, 
    flexDirection:'row'
  },
  underbutton:{
    fontFamily:'Lato-Regular', 
    fontSize: 16
  },
})

export default styles