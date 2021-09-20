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
    setResultado((pi * 2 / (w * pi)).toFixed(2))
    renderizaResultado()
  }

  const renderizaResultado = () => {
    return (
      <View style={styles.viewCalculos}>
        <View style={styles.viewRow}>
          <Text style={styles.textFormula}>T </Text>
          <Igual />
          <Divisao
            numerador='π.2'
            denominador={`W.π`} />
        </View>
        <SetaPraBaixo />
        <View style={styles.viewRow}>
          <Text style={styles.textFormula}>T </Text>
          <Igual />
          <Divisao
            numerador='π.2'
            denominador={`${w}.π`} />
        </View>
        <SetaPraBaixo />
        <View style={styles.viewRow}>
          <Text style={styles.textFormula}>T </Text>
          <Igual />
          <Text style={{ fontSize: 18 }}>{`${w}.2`}</Text>
        </View>
        <SetaPraBaixo />
        <Text style={styles.textFormula}>T = {resultado}s</Text>
      </View >
    )
  }
  return (
    <ScrollView
      keyboardShouldPersistTaps='handled'>
      <View style={styles.container}>
        <View style={styles.viewFormulaUtilizada}>
          <Text style={styles.textFormulaUtilizada}>Formula utilizada: </Text>
          <View style={styles.viewRow}>
            <Text style={styles.textFormula}>T </Text>
            <Igual />
            <Divisao
              numerador='π.2'
              denominador='W.π' />
          </View>

        </View>
        <Text style={styles.textBold}>π: 3.141592654</Text>
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
        <View>
          {resultado ?
            renderizaResultado() : null}
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  textFormulaUtilizada: {
    textAlignVertical: 'center',
    marginRight: 15,
    fontSize: 15,

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
    justifyContent: 'center',
    alignContent: 'center'
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
})


export default Periodo