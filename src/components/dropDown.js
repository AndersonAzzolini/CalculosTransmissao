import RNPickerSelect from 'react-native-picker-select';
import React from 'react'
import { StyleSheet } from 'react-native'
import Cores from '../assets/cores.json'


const Dropdown = (props) => {
  return (

    <RNPickerSelect
      onValueChange={props.onValueChange}
      items={props.items}
      useNativeAndroidPickerStyle={false}
      placeholder={{
        label: props.label
      }}

      style={{
        inputAndroid: {
          textAlign: "center",
          fontSize: 16,
          borderRadius: 8,
          color: Cores.branco,
          backgroundColor:Cores.buttons
        },
        label:{
          color:"red"
        },
        placeholder: {
          textAlign: "center",
          color: 'white',
        }
      }}

    />
  );

};

export default Dropdown