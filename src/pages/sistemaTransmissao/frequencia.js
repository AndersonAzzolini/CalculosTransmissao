import React, { useState } from 'react';
import {
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

const Frequencia = () => {
  const [periodo, setPeriodo] = useState(0)
  const [w, setW] = useState(0)
  const [resultado, setResultado] = useState(0)
  const [utilizarPeriodo, setUtilizarPeriodo] = useState(false)
  const [utilizarVelocidade, setUtilizarVelocidade] = useState(false)
  const pi = 3.141592654

  const calcular = () => {
    if (periodo) {
      setResultado((1 / parseFloat(periodo.replace(',', '.'))).toFixed(2).replace('.', ','))
    }
    if (w) {
      setResultado((parseFloat(w.replace(',', '.')) / 2).toFixed(2).replace('.', ','))
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
          <>
            <View style={styles.viewFormulaUtilizada}>
              <Text style={styles.textFormulaUtilizada}>Formula utilizada: </Text>
              <Text style={styles.textFormula}>f</Text>
              <Igual />
              <Divisao
                numerador='ω'
                denominador='2.π' />
            </View>
            <View style={styles.viewInputs} >
              <Text>ω = Velocidade Angular (rad/s)</Text>
              <Input
                placeholder='Valor de ω (rad/s)'
                value={w}
                onChangeText={(text) => setW(text)}
                keyboardType="phone-pad"
              />
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
              <View style={styles.viewRow}>
                <Text style={styles.textFormula}>f</Text>
                <Igual />
                <Divisao
                  numerador={`${w} rad/s`}
                  denominador={`2 rad`} />
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
  viewRow: {
    flexDirection: 'row',
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
  viewFormulaUtilizada: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'center',
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
  textFormula: {
    textAlignVertical: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
})


export default Frequencia