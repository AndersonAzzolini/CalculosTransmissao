import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from '../../components/button';
import Input from '../../components/input';

const Rotacao = () => {
  const [frequencia, setFrequencia] = useState(0)
  const [resultado, setResultado] = useState(0)
  const [w, setW] = useState(0)
  const pi = 3.141592654

  const calcular = () => {

    if (frequencia) {
      let resultado = 60 * frequencia
      console.log(resultado);
      setResultado(resultado)
    }
    if (w) {
      let valorWTransformado = w * pi
      let resultado = 30 * valorWTransformado / pi
      console.log(resultado);
      setResultado(resultado)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewInputs}>
        <Text> Frequência</Text>
        <Input
          placeholder='Valor de Frequência'
          value={frequencia}
          onChangeText={(text) => setFrequencia(text)}
          keyboardType="phone-pad"
        />
        <Input
          placeholder='Calcular com valor de W'
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
})


export default Rotacao