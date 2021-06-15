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
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
    width:'80%',
    alignItems: "center",
    elevation: 5
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    margin: 20
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
    marginBottom: 15,
    textAlign: "center"
  }
});

export default styles