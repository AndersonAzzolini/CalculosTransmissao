import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from '../../components/button';
import Input from '../../components/input';

const Frequencia = () => {
  const [periodo, setPeriodo] = useState(0)
  const [w, setW] = useState(0)
  const [resultado, setResultado] = useState(0)
  const pi = 3.141592654

  const calcular = () => {
    if (periodo) {
      let resultado = 1 / periodo
      console.log(resultado);
      setResultado(resultado)
    }
    if (w){
      let valorWTransformado = w * pi
      console.log(valorWTransformado);
      let resultado = valorWTransformado / (2 * pi)
      console.log(resultado);
      setResultado(resultado)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewInputs}>
        <Text> Periodo</Text>
        <Input
          placeholder='Valor do Periodo'
          value={periodo}
          onChangeText={(text) => setPeriodo(text)}
          keyboardType="phone-pad"
        />
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
  resultado: {
    flex: 1,
    justifyContent: 'center'
  },
  textResultado: {
    textAlign: 'center'
  },
})


export default Frequencia