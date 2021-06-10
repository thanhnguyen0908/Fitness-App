import React from 'react'
import {View, TouchableOpacity, Text, TextInput} from 'react-native'
import styles from './Styles'

export const ModalProps = (props) => {
  return(
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
      <Text style={styles.modalText}>{props.text}</Text>
      <TextInput style={styles.modalInfo} value={props.inputValue} onChangeText={props.onChangeTextHandler}/>
      <TouchableOpacity
        style={[styles.button, styles.buttonClose]}
        onPress={props.onPressHandler}
      >
        <Text style={styles.textStyle}>Validate</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}