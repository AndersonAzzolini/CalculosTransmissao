import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import CardHomePage from '../../components/cardHomePage';

const HomePage = ({ navigation }) => {

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container}>
        <View style={styles.viewButtons}>
          <CardHomePage
            text='Calcular RPM'
            onPress={() => navigation.navigate('Rpm')} />
          <CardHomePage
            text='Calcular Período'
            onPress={() => navigation.navigate('Período')} />
          <CardHomePage
            text='Calcular Frequência'
            onPress={() => navigation.navigate('Frequência')} />
          <CardHomePage
            text='Calcular Rotação'
            onPress={() => navigation.navigate('Rotação')} />
          <CardHomePage
            text='Calcular Velocidade Angular'
            onPress={() => navigation.navigate('Velocidade Angular')} />
          <CardHomePage
            text='Calcular Velocidade Periférica'
            onPress={() => navigation.navigate('Velocidade Periférica')} />
          <CardHomePage
            text='Calcular Relação de Transmissão'
            onPress={() => navigation.navigate('Relação de Transmissão')} />
          <CardHomePage
            text='Calcular Torque'
            onPress={() => navigation.navigate('Torque')} />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor:'#021F59'
  },
  viewButtons: {
    flex: 1,

  },
})


export default HomePage