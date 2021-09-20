import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from '../../components/button';
import Input from '../../components/input';

const Periodo = () => {
  const [w, setW] = useState(0)
  const pi = 3.141592654

  const calcular = () => {
    console.log(w);
    let resultado = pi * 2 / (w * pi)
    console.log(resultado);
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewInputs}>
        <Text>W</Text>
        <Input
          placeholder='Valor de W'
          value={w}
          onChangeText={(text) => setW(text)}
          keyboardType="phone-pad"
        />
        <Button
          text='calcular'
          onPress={() => calcular()} />
      </View>
      <View style={styles.resultado}>
        <Text style={styles.textResultado}>{resultado || ''}</Text>

      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,

  },
  viewInputs: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  resultado:{
    flex:1,
    justifyContent:'center'
  },
  textResultado:{
    textAlign:'center'
  },
})


export default Periodo