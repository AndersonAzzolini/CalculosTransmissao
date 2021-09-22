import { View, StyleSheet, Pressable, Text, Dimensions } from 'react-native'
import React from 'react'

const CardHomePage = ({ onPress, text }) => {

  return (
    <Pressable
      onPress={onPress}>

      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.textCard}>{text}</Text>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    minHeight: 75,
    justifyContent: 'center',
    elevation: 10,
    borderTopColor: 'black',
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: '#021F59',
    shadowRadius: 4.65,
    marginVertical: 5

  },
  textCard: {
    textAlign: 'center',
    color: '#021F59',
    fontWeight: 'bold',
    fontSize: 15
  }
})

export default CardHomePage


