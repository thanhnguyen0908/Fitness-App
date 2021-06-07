import React from 'react';
import {View,Text, ScrollView} from 'react-native'
import { HeaderProp } from './HeaderProp';

export default function Stats() {
  return (
    <ScrollView style={{flex:1}} >
      <HeaderProp text='Stats' />
    </ScrollView>
  );
}