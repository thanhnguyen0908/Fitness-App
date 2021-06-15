import React, {useState, useEffect} from 'react'
import {View, Text, ScrollView, Image} from 'react-native'
import auth from '@react-native-firebase/auth';
import { HeaderProp } from '../header/HeaderProp';
import firestore from '@react-native-firebase/firestore';
import styles from './ProfileStyles'
import {InfoProps} from './InfoProps'
import {ButtonProps} from './ButtonProps'

export default function Profile({navigation}){
    const userUID = auth().currentUser.uid
    const [displayName, setDisplayName] = useState([]);

    const getData = async () => {

    const snapshot = await firestore().collection('users').doc(userUID).get()
    setDisplayName(snapshot.data());

    };

    const [image,setImage] = useState('https://i1.wp.com/lucloi.vn/wp-content/uploads/2020/08/b73-1.jpg?fit=800%2C462&ssl=1')

    const onLogout = () => {
          auth()
           .signOut()
           .then(() => console.log('User signed out!'));
    }
    
    useEffect(() => {
      getData() 
    }, []);

    return (
    <View style={styles.container}>
      <HeaderProp text='Profile' />
      <ScrollView style={{flex:1}}>
        <View style={{flex:1}}>
          <View style={styles.avatarcontainer}>
            <View style={styles.avatar} ><Image source={{uri: displayName.img
                    ? displayName.img
                    : image}} style={styles.avatarimg} /></View>
            <View style={styles.avatarname}>
            <Text style={styles.avatarnametext}>
              {displayName.fullName}</Text>
            </View>
          </View>
          <View style={styles.physcontainer}>
              <Text style={styles.phystext}>Physical Traits</Text>
              <View style={styles.whitecontainer}>
                <InfoProps firsttext='Weight(kg):' secondtext={displayName.weight} iconname='weight-kilogram' inputStyle={{ marginLeft: 25, marginTop: 30, width:'40%', }}/>
                <InfoProps firsttext='Height(kg):' secondtext={displayName.height} iconname='human-male-height' inputStyle={{ margin: 25, width:'60%'}}/>
                <InfoProps firsttext='Gender(kg):' secondtext={displayName.gender} iconname='gender-male-female-variant' inputStyle={{ marginLeft: 25, marginBottom: 40, width:'80%', }}/>
              </View>
            </View>
          <View style={styles.contactcontainer}>
              <Text style={styles.phystext}>Contact Information</Text>
              <View style={styles.whitecontainer}>
                <InfoProps firsttext='Full Name:' secondtext={displayName.fullName} iconname='form-textbox' inputStyle={{ margin: 25,}}/>
                <InfoProps firsttext='Email:' secondtext={displayName.email} iconname='email' inputStyle={{ marginLeft: 25, marginRight: 25}}/>
                <InfoProps firsttext='Phone:' secondtext={displayName.phoneNum} iconname='phone' inputStyle={{ margin: 25, marginBottom: 40,}}/>
              </View>
          </View>
          <View style={styles.editcontainer}>
              <ButtonProps iconname='circle-edit-outline' text='Edit Profile' onPressHandler={()=>navigation.navigate('Edit')}/>
              <ButtonProps iconname='exit-to-app' text='Log Out' onPressHandler={()=>onLogout()}/>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}



// import React, {useState, useEffect} from 'react'
// import {View, Text, TouchableOpacity, ScrollView, StyleSheet, Image} from 'react-native'
// import auth from '@react-native-firebase/auth';
// import { HeaderProp } from '../header/HeaderProp';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import firestore from '@react-native-firebase/firestore';
// import styles from './ProfileStyles'
// import ImagePicker from 'react-native-image-crop-picker'
// import storage from '@react-native-firebase/storage'

// export default function Profile() {
//   const onLogout = () => {
//     auth()
//      .signOut()
//      .then(() => console.log('User signed out!'));
//   }

//   // const [email, setEmail] = useState('')
//   const [displayName, setDisplayName] = useState([]);

  
//   const userUID = auth().currentUser.uid
//   const getData = async () => {

//     const snapshot = await firestore().collection('users').doc(userUID).get()
//     setDisplayName(snapshot.data());
//   };

//   const [image,setImage] = useState('https://i1.wp.com/lucloi.vn/wp-content/uploads/2020/08/b73-1.jpg?fit=800%2C462&ssl=1')
//   const choosePhotoFromLibrary = () => {
//     ImagePicker.openPicker({
//       width: 300,
//       height: 300,
//       cropping: true,
//     }).then(image => {
//       console.log(image)
//       setImage(image.path)
//     })
//   }
//   const uploadImage = async () => {
//     const uploadUri = image
//     let filename = uploadUri.substring(uploadUri.lastIndexOf('/')+1)

//     try {
//       await storage().ref(filename).putFile(uploadUri)
//     } catch(e) {
//     console.log(e)
//     }
//   }

//   useEffect(() => {
//     // const userEmail = auth().currentUser.email
//     // setEmail(userEmail)
//     getData() 
//   }, [])


//   return (
//     <View style={{flex:1, backgroundColor:'white'}}>
//       <HeaderProp text='Profile' />
//       <ScrollView style={{flex:1}}>
//         <View style={{flex:1}}>
//           <View style={styles.avatarcontainer}>
//             <TouchableOpacity style={styles.avatar} onPress={()=>choosePhotoFromLibrary()}><Image source={{uri:image}} style={{flex: 1, borderRadius: 10}} /></TouchableOpacity>
//             <View style={{borderBottomWidth: 1, borderBottomColor:'white', marginTop: 50, marginBottom: 50, marginLeft: 10}}>
//             <Text style={{color:'white',fontSize: 30, fontWeight: 'bold'}}>
//               {displayName.fullName}</Text>
//             </View>
//           </View>
//           <View style={{margin: 20, flex: 1}}>
//               <Text style={{fontWeight:'bold', fontSize: 25}}>Physical Traits</Text>
//               <View style={{backgroundColor:'white', justifyContent:'center', borderRadius: 10, marginTop: 10, elevation: 3}}>
//                 <View style={{flexDirection:'row', borderBottomWidth: 1, marginLeft: 25, marginTop: 30, width:'40%', borderBottomColor:'#668FF4'}}>
//                   <MaterialCommunityIcons name='weight-kilogram' size={40} style={{marginTop: 5}}/>
//                   <View style={{marginLeft: 5}}>
//                   <Text style={{fontWeight:'bold', fontSize: 18}}>Weight(kg):</Text>
//                   <Text>{displayName.weight}</Text>
//                   </View>
//                 </View>
//                 <View style={{flexDirection:'row', borderBottomWidth: 1, margin: 25, width:'60%', borderBottomColor:'#668FF4'}}>
//                   <MaterialCommunityIcons name='human-male-height' size={40} style={{marginTop: 5}}/>
//                   <View style={{marginLeft: 5}}>
//                   <Text style={{fontWeight:'bold', fontSize: 18}}>Height(cm):</Text>
//                   <Text>{displayName.height}</Text>
//                   </View>
//                 </View>
//                 <View style={{flexDirection:'row', borderBottomWidth: 1, marginLeft: 25, marginBottom: 40, width:'80%', borderBottomColor:'#668FF4'}}>
//                   <MaterialCommunityIcons name='gender-male-female-variant' size={40} style={{marginTop: 5}}/>
//                   <View style={{marginLeft: 5}}>
//                   <Text style={{fontWeight:'bold', fontSize: 18}}>Gender:</Text>
//                   <Text>{displayName.gender}</Text>
//                   </View>
//                 </View>
//               </View>
//             </View>
//           <View style={{marginLeft: 20, marginRight: 20, flex: 1}}>
//               <Text style={{fontWeight:'bold', fontSize: 25}}>Contact Information</Text>
//               <View style={{backgroundColor:'white', justifyContent:'center', borderRadius: 10, marginTop: 10, elevation: 3}}>
//                 <View style={{flexDirection:'row', borderBottomWidth: 1, margin: 25, borderBottomColor:'#668FF4'}}>
//                   <MaterialCommunityIcons name='form-textbox' size={40} style={{marginTop: 5}}/>
//                   <View style={{marginLeft: 5}}>
//                   <Text style={{fontWeight:'bold', fontSize: 18}}>Full name:</Text>
//                   <Text>{displayName.fullName}</Text> 
//                   </View>
//                 </View>
//                 <View style={{flexDirection:'row', borderBottomWidth: 1, marginLeft: 25, marginRight: 25, borderBottomColor:'#668FF4'}}>
//                   <MaterialCommunityIcons name='email' size={40} style={{marginTop: 5}}/>
//                   <View style={{marginLeft: 5}}>
//                   <Text style={{fontWeight:'bold', fontSize: 18}}>Email:</Text>
//                   <Text>{displayName.email}</Text>
//                   </View>
//                 </View>
//                 <View style={{flexDirection:'row', borderBottomWidth: 1, margin: 25, marginBottom: 40, borderBottomColor:'#668FF4'}}>
//                   <MaterialIcons name='phone' size={40} style={{marginTop: 5}}/>
//                   <View style={{marginLeft: 5}}>
//                   <Text style={{fontWeight:'bold', fontSize: 18}}>Phone Number:</Text>
//                   <Text>{displayName.phoneNum}</Text>
//                   </View>
//                 </View>
//               </View>
//           </View>
//           <View style={{flex: 1, flexDirection:'row', justifyContent:'space-evenly', margin: 20}}>
//               <TouchableOpacity style={{backgroundColor:'white', padding: 20, borderRadius: 10, elevation: 3, width:'35%', alignItems:'center', justifyContent:'center'}}>
//                 <MaterialCommunityIcons name = 'circle-edit-outline' size={35} />
//                 <Text style={{textAlign:'center', color:'#61B4A5'}}>Edit Profile</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={{backgroundColor:'white', padding: 20, borderRadius: 10, elevation: 3, width:'35%', alignItems:'center', justifyContent:'center'}} onPress={()=>onLogout()}>
//                 <MaterialCommunityIcons name = 'exit-to-app' size={35} />
//                 <Text style={{textAlign:'center', color:'#61B4A5'}}>Log Out</Text>
//               </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }












































































































