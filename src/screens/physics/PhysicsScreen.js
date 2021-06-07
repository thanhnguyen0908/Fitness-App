import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {manprepare} from '../../assets/image';
import {Props} from './Props';
import styles from './Styles';

function PhysicsScreen({navigation}) {
    return (
      <View style = {styles.bigcontainer}>
      <View style={styles.imagecontainer}>
        <Image source = {manprepare} style={styles.manprepare}/>
      </View>
      <Text style={styles.welcome}>Physical Information</Text>
      <Text style={styles.underwelcome}>Help us understand better about you.</Text>

      <View style={[styles.container, {marginTop: 10}]}>
      <Props addStyle={{justifyContent:'center'}} text='HEIGHT'/>
      <Props addStyle={{justifyContent:'center', width:'92%'}} text='CONSUMPTION AMOUNT' />
      <Props addStyle={{justifyContent:'center'}} text='WEIGHT' />
      </View>

      <View style={styles.container}>
      <Props text='SEX' />
      <Props text={`ACTIVITY\nLEVEL`} />
      <Props text='GOAL' />      
      </View>

      <View style ={styles.validatecontainer}>
        <TouchableOpacity style= {styles.validatebutton} onPress={()=> navigation.navigate('Suggestion')}>
          <Text style={styles.validatetext}>Validate</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
export default PhysicsScreen 