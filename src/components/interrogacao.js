import { StyleSheet, Image } from 'react-native'
import React from 'react'
import Interrogacao from '../assets/img/interrogacao.png'

const IconInterrogacao = () => {

  return (
    <Image
      style={styles.interrogacao}
      source={Interrogacao}
    />
  )
}

const styles = StyleSheet.create({
  interrogacao: {
    display:'flex',
  },
})

export default IconInterrogacao


