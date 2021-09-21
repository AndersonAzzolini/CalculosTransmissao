import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Button from '../../components/button';

const HomePage = ({ navigation }) => {

  return (
    <ScrollView contentContainerStyle={styles.scroll}
      keyboardShouldPersistTaps='handled'>
      <View style={styles.container}>
        <View style={styles.viewButtons}>
          <Button
            text='Calcular RPM'
            onPress={() => navigation.navigate('Rpm')} />
          <Button
            text='Calcular Período'
            onPress={() => navigation.navigate('Período')} />
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
  scroll: {
    flexGrow: 1,
    justifyContent: 'center'
  },
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