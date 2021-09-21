import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from '../../components/button';
import Input from '../../components/input';
import Cores from '../../assets/cores.json'
import { RadioButton } from 'react-native-radio-buttons-group';

const Frequencia = () => {
  const [periodo, setPeriodo] = useState(0)
  const [w, setW] = useState(0)
  const [resultado, setResultado] = useState(0)
  const [utilizarPeriodo, setUtilizarPeriodo] = useState(false)
  const [utilizarVelocidade, setUtilizarVelocidade] = useState(false)
  const pi = 3.141592654

  const calcular = () => {
    if (periodo) {
      let resultado = 1 / periodo
      console.log(resultado);
      setResultado(resultado)
    }
    if (w) {
      let valorWTransformado = w * pi
      console.log(valorWTransformado);
      let resultado = valorWTransformado / (2 * pi)
      console.log(resultado);
      setResultado(resultado)
    }
  }

  const defineFormula = (value) => {
    if (value == 1) {
      setUtilizarPeriodo(true)
      setUtilizarVelocidade(false)
    }
    if (value == 2) {
      setUtilizarPeriodo(false)
      setUtilizarVelocidade(true)
    }
  }

  return (
    <View style={styles.container}>
      < View style={styles.viewOpcaoFormulas}>
        <Text style={styles.textBold}>Qual fórmula pretende utilizar?</Text>
        <View style={styles.viewCheckBox}>
          <RadioButton
            id='1'
            label='Período'
            onPress={(value) => defineFormula(value)}
            selected={utilizarPeriodo}

          />
          <RadioButton
            id='2'
            label='Velocidade'
            onPress={(value) => defineFormula(value)}
            selected={utilizarVelocidade}
          />
        </View>
      </View>
      {
        utilizarPeriodo &&
        <>
          <View style={styles.viewInputs}>
            <Text>T = Periodo (s)</Text>
            <Input
              placeholder='Valor do Periodo'
              value={periodo}
              onChangeText={(text) => setPeriodo(text)}
              keyboardType="phone-pad"
            />
            <Button
              text='calcular'
              onPress={() => calcular()} />
          </View>
        </>
      }
      {utilizarVelocidade &&
        <View style={styles.viewInputs} >
          <Text>ω = Velocidade Angular (rad/s)</Text>

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
      }
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
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  viewOpcaoFormulas: {
    marginVertical: 15
  },
  viewCheckBox: {
    marginVertical: 5,
  },
  resultado: {
    flex: 1,
    justifyContent: 'center'
  },
  textResultado: {
    textAlign: 'center'
  },
  textOpcaoFormulas: {
    marginVertical: 5
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10
  },

})


export default Frequencia