import React from 'react';
import {View,Text, ScrollView} from 'react-native'
import { HeaderProp } from '../header/HeaderProp';

export default function Explore() {
  return (
    <ScrollView style={{flex:1}}>
      <HeaderProp text='Explore' />
    </ScrollView>
  );
}