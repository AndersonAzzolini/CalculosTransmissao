import React, { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from '../../components/button';
import Input from '../../components/input';
import { RadioButton } from 'react-native-radio-buttons-group';
import Igual from '../../components/matematicos/igual';
import Divisao from '../../components/matematicos/umDivididoPorUm';
import SetaPraBaixo from '../../components/imagem';
import Tooltip from 'react-native-walkthrough-tooltip';
import IconInterrogacao from '../../components/interrogacao';

const Frequencia = () => {
  const [periodo, setPeriodo] = useState(0)
  const [w, setW] = useState(0)
  const [resultado, setResultado] = useState(0)
  const [utilizarPeriodo, setUtilizarPeriodo] = useState(false)
  const [utilizarVelocidade, setUtilizarVelocidade] = useState(false)
  const [toolTipVisible, setToolTipVisible] = useState(false)

  const calcular = () => {
    if (periodo) {
      setResultado((1 / periodo).toFixed(2).replace('.', ','))
    }
    if (w) {
      setResultado((w / 2).toFixed(2).replace('.', ','))
    }
  }

  const defineFormula = (value) => {
    if (value == 1) {
      setUtilizarPeriodo(true)
      setUtilizarVelocidade(false)
      setResultado(0)
      setW(0)
    }
    if (value == 2) {
      setUtilizarPeriodo(false)
      setUtilizarVelocidade(true)
      setResultado(0)
      setPeriodo(0)
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
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
            <View style={styles.viewFormulaUtilizada}>
              <Text style={styles.textFormulaUtilizada}>Formula utilizada: </Text>
              <Text style={styles.textFormula}>f</Text>
              <Igual />
              <Divisao
                numerador='1'
                denominador='T' />
            </View>
            <Text>T = Periodo (s)</Text>
            <View style={styles.viewInputs}>
              <View style={styles.viewRow}>
                <View style={styles.viewTextInputs}>
                  <Text style={styles.textInputs}>Valor do Periodo:</Text>
                </View>

                <Input
                  value={periodo}
                  onChangeText={(text) => setPeriodo(text.replace(',', '.'))}
                  keyboardType="phone-pad"
                />
              </View>

              <Button
                text='calcular'
                onPress={() => calcular()} />
            </View>
          </>
        }
        {utilizarVelocidade &&
          <>
            <View style={styles.viewFormulaUtilizada}>
              <Text style={styles.textFormulaUtilizada}>Formula utilizada: </Text>
              <Text style={styles.textFormula}>f</Text>
              <Igual />
              <Divisao
                numerador='ω'
                denominador='2.π' />
            </View>
            <Text>ω = Velocidade Angular (rad/s)</Text>
            <View style={styles.viewInputs} >
              <View style={styles.viewRow}>
                <View style={styles.viewTextInputs}>
                  <Text style={styles.textInputs}>Valor de ω:</Text>
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
          </>
        }
        {
          utilizarPeriodo && resultado ?
            <View style={styles.viewCalculos}>
              <View style={styles.viewRow}>
                <Text style={styles.textFormula}>f</Text>
                <Igual />
                <Divisao
                  numerador='1'
                  denominador='T' />
              </View>
              <SetaPraBaixo />
              <View style={styles.viewRow}>
                <Text style={styles.textFormula}>f</Text>
                <Igual />
                <Divisao
                  numerador='1'
                  denominador={`${periodo}`} />
              </View>
              <SetaPraBaixo />
              <View style={styles.viewRow}>
                <Text style={styles.textFormula}>f</Text>
                <Igual />
                <Text style={styles.textFormula}>{resultado} Hz</Text>

              </View>
            </View>
            : null
        }
        {
          utilizarVelocidade && resultado ?
            <View style={styles.viewCalculos}>
              <View style={styles.viewRow}>
                <Text style={styles.textFormula}>f</Text>
                <Igual />
                <Divisao
                  numerador='ω'
                  denominador='2.π' />
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
                    <Text style={styles.textFormula}>f</Text>
                    <Igual />
                    <Divisao
                      numerador={`${w} rad/s`}
                      denominador={`2 rad`} />
                    <View style={styles.viewBalao}>
                      <IconInterrogacao />
                    </View>
                  </View>
                </Tooltip>
              </Pressable>
              <SetaPraBaixo />
              <View style={styles.viewRow}>
                <Text style={styles.textFormula}>f</Text>
                <Igual />
                <Text style={styles.textFormula}>{resultado} Hz</Text>
              </View>
            </View>
            : null
        }
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    justifyContent: 'flex-start'
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,

  },
  viewCalculos: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50
  },
  viewTextInputs: {
    justifyContent: 'space-around'
  },
  viewRow: {
    flexDirection: 'row',
  },
  viewInputs: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    marginTop: 10
  },
  viewOpcaoFormulas: {
    marginVertical: 15
  },
  viewCheckBox: {
    marginVertical: 5,
  },
  viewFormulaUtilizada: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'center',
  },
  viewBalao: {
    marginLeft: 10
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
  textFormulaUtilizada: {
    textAlignVertical: 'center',
    marginRight: 15,
    fontSize: 15
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10
  },
  textInputs: {
    marginRight: 10,
    fontWeight: 'bold'
  },
  textFormula: {
    textAlignVertical: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
})


export default Frequencia