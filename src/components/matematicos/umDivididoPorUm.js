import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import Cores from "../../assets/cores.json";

const Divisao = ({ numerador, denominador }) => {

  return (
    <View style={styles.viewContainer}>
      <View>
        <Text style={styles.textNumerador}>{numerador}</Text>
        <Text style={styles.textDenominador} >{denominador}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: "row",
  },
  textNumerador: {
    fontSize: 17, borderBottomWidth: 1, alignSelf: 'flex-start'
  },
  textDenominador: {
    textAlign: 'center',
    fontSize: 17
  },
})

export default Divisao


