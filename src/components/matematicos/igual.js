import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import Cores from "../../assets/cores.json";

const Igual = () => {

  return (
    <View style={styles.viewContainer}>
      <Text style={styles.textIgual}>=</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    marginHorizontal: 5,
    justifyContent:'center',
  },
  textIgual: {
    fontSize: 17,

  },

})

export default Igual


