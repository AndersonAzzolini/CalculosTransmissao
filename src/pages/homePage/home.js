import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from '../../components/button';
import Input from '../../components/input';

const HomePage = ({ navigation }) => {

  return (
    <ScrollView
      keyboardShouldPersistTaps='handled'>
      <View style={styles.container}>
        <View style={styles.viewButtons}>
          <Button
            text='Calcular RPM'
            onPress={() => navigation.navigate('Rpm')} />
          <Button
            text='Calcular Periodo'
            onPress={() => navigation.navigate('Periodo')} />
          <Button
            text='Calcular Frequência'
            onPress={() => navigation.navigate('Frequência')} />
          <Button
            text='Calcular Rotação'
            onPress={() => navigation.navigate('Rotação')} />
          <Button
            text='Calcular Velocidade Angular'
            onPress={() => navigation.navigate('Velocidade Angular')} />
          <Button
            text='Calcular Velocidade Periférica'
            onPress={() => navigation.navigate('Velocidade Periférica')} />
          <Button
            text='Calcular Relação de Transmissão'
            onPress={() => navigation.navigate('Relação de Transmissão')} />
          <Button
            text='Calcular Torque'
            onPress={() => navigation.navigate('Torque')} />

        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,

  },
  viewButtons: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
})


export default HomePage