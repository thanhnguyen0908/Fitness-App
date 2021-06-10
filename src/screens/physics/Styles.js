import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    width: '95%', 
    flexDirection: 'row'},
  manprepare:{
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
    alignItems:'center',
    backgroundColor:'white'
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
  validatecontainer:{
    flex:1, 
    width: '90%', 
    alignItems:'center',
    justifyContent:'center' 
  },
  validatebutton:{
    width: '90%', 
    backgroundColor:'#4A7DFC', 
    height:'50%', 
    alignItems:'center', 
    justifyContent:'center', 
    borderRadius: 5,
    bottom: 10,
  },
  validatetext:{
    fontFamily:'Lato-Bold', 
    fontSize: 18, 
    color:'white'
  },
  centeredView: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 50,
    justifyContent:'center',
    shadowColor: "#000",
    elevation: 5
  },
  button: {
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    textAlign: "center"
  },
  modalInfo:{
    borderBottomWidth: 1, 
    borderBottomColor: '#4A7DFC', 
    margin: 5
  } 
})

export default styles