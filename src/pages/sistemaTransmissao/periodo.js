import React, { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';
import Button from '../../components/button';
import SetaPraBaixo from '../../components/imagem';
import Input from '../../components/input';
import IconInterrogacao from '../../components/interrogacao';
import Igual from '../../components/matematicos/igual';
import Divisao from '../../components/matematicos/umDivididoPorUm';

const Periodo = () => {
  const [w, setW] = useState(0)
  const [resultado, setResultado] = useState(0)
  const [toolTipVisible, setToolTipVisible] = useState(false)

  const calcular = () => {
    setResultado((2 / w).toFixed(3).replace('.', ','))
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
        <Pressable
          onPress={() => setToolTipVisible(true)}>
          <Tooltip
            isVisible={toolTipVisible}
            content={<Text>FUNÇAO DA ADRisdasfsa </Text>}
            placement="top"
            onClose={() => setToolTipVisible(false)}>
            <View style={styles.viewRow}>
              <Text style={styles.textFormula}>T </Text>
              <Igual />
              <Divisao
                numerador='2 rad'
                denominador={`${w} rad/s`} />
              <View style={styles.viewBalao}>
                <IconInterrogacao />
              </View>
            </View>
          </Tooltip>
        </Pressable>
        <SetaPraBaixo />
        <Text style={styles.textFormula}>T = {resultado}s</Text>
      </View >
    )
  }

  return (
    <ScrollView
      contentContainerStyle={styles.scroll}>
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
              onChangeText={(text) => setW(text.replace(',', '.'))}
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
  container: {
    flex: 1,
    paddingHorizontal: 20,
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
    marginVertical: 50,
  },
  viewRow: {
    flexDirection: 'row',
  },
  viewBalao: {
    marginLeft: 10
  },
  viewInputs: {
    justifyContent: 'flex-start',
    alignContent: 'center',
    marginTop: 15
  }, textFormula: {
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