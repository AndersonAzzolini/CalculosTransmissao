import { View, StyleSheet } from 'react-native'
import React from 'react'
import Cores from "../assets/cores.json";

const Divider = ({ placeholderTextColor, style, refInput, ...props }) => {

  return (
    <View style={styles.border}>
    </View>
  )
}

const styles = StyleSheet.create({
  border: {
    borderBottomWidth: 1,
    color: Cores.cinzaEscuro,
  },
})

export default Divider


