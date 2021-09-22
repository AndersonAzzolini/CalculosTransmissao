import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from '../../components/button';
import SetaPraBaixo from '../../components/imagem';
import Input from '../../components/input';
import Igual from '../../components/matematicos/igual';
import Divisao from '../../components/matematicos/umDivididoPorUm';

const Periodo = () => {
  const [w, setW] = useState(0)
  const pi = 3.141592654
  const [resultado, setResultado] = useState(0)

  const calcular = () => {
    setResultado((2 / w.replace(',', '.')).toFixed(3).replace('.', ','))
    renderizaResultado()
  }

  const renderizaResultado = () => {
    return (
      <View style={styles.viewCalculos}>
        <View style={styles.viewRow}>
          <Text style={styles.textFormula}>T </Text>
          <Igual />
          <Divisao
            numerador='2.π'
            denominador={`ω`} />
        </View>
        <SetaPraBaixo />
        <View style={styles.viewRow}>
          <Text style={styles.textFormula}>T </Text>
          <Igual />
          <Divisao
            numerador='2 rad'
            denominador={`${w} rad/s`} />
        </View>
        <SetaPraBaixo />
        <Text style={styles.textFormula}>T = {resultado}s</Text>
      </View >
    )
  }
  return (
    <ScrollView
      contentContainerStyle={styles.scroll}
      keyboardShouldPersistTaps='handled'>
      <View style={styles.container}>
        <View style={styles.viewFormulaUtilizada}>
          <Text style={styles.textFormulaUtilizada}>Formula utilizada: </Text>
          <View style={styles.viewRow}>
            <Text style={styles.textFormula}>T </Text>
            <Igual />
            <Divisao
              numerador='2.π'
              denominador='ω' />
          </View>

        </View>
        <Text>ω = Velocidade Angular (rad/s)</Text>
        <View style={styles.viewInputs}>
          <View style={styles.viewRow}>
            <View style={styles.viewTextInputs}>
              <Text style={styles.textInputs}>Valor de ω: </Text>
            </View>
            <Input
              value={w}
              onChangeText={(text) => setW(text)}
              keyboardType="phone-pad"
            />
          </View>
          <Button
            text='calcular'
            onPress={() => calcular()} />
        </View>
        <View>
          {resultado ?
            renderizaResultado() : null}
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
  viewTextInputs: {
    justifyContent: 'space-around'
  },
  viewFormulaUtilizada: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'center',
  },
  viewCalculos: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50
  },
  viewRow: {
    flexDirection: 'row',

  },
  container: {
    flex: 1,
    paddingHorizontal: 20,

  },
  viewInputs: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    marginTop: 10
  },
  textFormula: {
    textAlignVertical: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  resultado: {
    flex: 1,
    justifyContent: 'center'
  },
  textResultado: {
    textAlign: 'center'
  },
  textInputs: {
    marginRight: 10,
    fontWeight: 'bold'
  },
  textFormulaUtilizada: {
    textAlignVertical: 'center',
    marginRight: 15,
    fontSize: 15,
  },
})
export default Periodo