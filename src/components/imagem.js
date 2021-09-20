import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import Seta from '../assets/img/down-arrow.png'


const SetaPraBaixo = ({ placeholderTextColor, style, refInput, ...props }) => {

  return (
    <View >
      <Image
        style={styles.seta}
        source={Seta}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  seta: {
    marginVertical: 15
  },
})

export default SetaPraBaixo


