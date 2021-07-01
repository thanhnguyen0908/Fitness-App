import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
  container:{ 
    flex: 1,
    backgroundColor:'white', 
  },
  avatarcontainer:{
    backgroundColor:'#4A7DFC', 
    borderBottomLeftRadius: 15, 
    borderBottomRightRadius: 15, 
    justifyContent:'center', 
    alignItems:'center', 
    flexDirection:'row',
    flex: 1,
    height:'40%'
  },
  avatar:{
    backgroundColor:'white', 
    width:'40%', 
    height: '80%', 
    borderRadius: 10, 
    elevation: 3,
  },
  avatarimg:{
    flex: 1, 
    borderRadius: 10
  },
  avatarname:{
    marginTop: 50, 
    marginBottom: 50, 
    marginLeft: 10
  },
  avatarnametext:{
    color:'white',
    fontSize: 30, 
    fontWeight: 'bold',
    borderBottomWidth: 1, 
    borderBottomColor:'white', 
  },
  physcontainer:{
    margin: 20, 
    flex: 1
  },
  phystext:{
    fontWeight:'bold', 
    fontSize: 25
  },
  whitecontainer:{
    backgroundColor:'white', 
    justifyContent:'center', 
    borderRadius: 10, 
    marginTop: 10, 
    elevation: 3
  },
  contactcontainer:{
    marginLeft: 20, 
    marginRight: 20, 
    flex: 1
  },
  editcontainer:{
    flex: 1, 
    flexDirection:'row', 
    justifyContent:'space-evenly', 
    margin: 20}
})

export default styles