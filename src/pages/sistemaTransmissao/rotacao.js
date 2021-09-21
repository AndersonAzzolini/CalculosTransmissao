import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { RadioButton } from 'react-native-radio-buttons-group';
import Button from '../../components/button';
import SetaPraBaixo from '../../components/imagem';
import Input from '../../components/input';
import Igual from '../../components/matematicos/igual';
import Divisao from '../../components/matematicos/umDivididoPorUm';

const Rotacao = () => {
  const [frequencia, setFrequencia] = useState(0)
  const [resultado, setResultado] = useState(0)
  const [w, setW] = useState(0)
  const [utilizarVelocidade, setUtilizarVelocidade] = useState(false)
  const [utilizarFrequencia, setUtilizarFrequencia] = useState(false)
  const pi = 3.141592654

  const calcular = () => {

    if (frequencia) {
      setResultado((60 * parseFloat(frequencia.replace(',', '.'))).toFixed(2).replace('.', ','))
    }
    if (w) {
      setResultado((w.replace(',', '.') / 2).toFixed(2).replace('.', ','))
    }
  }

  const defineFormula = (value) => {
    if (value == 1) {
      setUtilizarFrequencia(true)
      setUtilizarVelocidade(false)
      setResultado(0)
      setW(0)
    }
    if (value == 2) {
      setUtilizarFrequencia(false)
      setUtilizarVelocidade(true)
      setResultado(0)
      setFrequencia(0)
    }
  }


  return (
    <ScrollView>
      <View style={styles.container}>
        < View style={styles.viewOpcaoFormulas}>
          <Text style={styles.textBold}>Qual fórmula pretende utilizar?</Text>
          <View style={styles.viewCheckBox}>
            <RadioButton
              id='1'
              label='Frequencia'
              onPress={(value) => defineFormula(value)}
              selected={utilizarFrequencia}

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
          utilizarFrequencia &&
          <>
            <View style={styles.viewFormulaUtilizada}>
              <Text style={styles.textFormulaUtilizada}>Formula utilizada: </Text>
              <Text style={styles.textFormula}>n</Text>
              <Igual />
              <Text style={styles.textFormula}>60.f</Text>
            </View>
            <View style={styles.viewInputs}>
              <Text>f = Frêquencia (Hz)</Text>
              <Input
                placeholder='Valor da Frêquencia (Hz)'
                value={frequencia}
                onChangeText={(text) => setFrequencia(text)}
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
          utilizarFrequencia && resultado ?
            <View style={styles.viewCalculos}>
              <View style={styles.viewRow}>
                <Text style={styles.textFormula}>f</Text>
                <Igual />
                <Text style={styles.textFormula}>60.f</Text>
              </View>
              <SetaPraBaixo />
              <View style={styles.viewRow}>
                <Text style={styles.textFormula}>f</Text>
                <Igual />
                <Text style={styles.textFormula}>60.{frequencia} Hz</Text>

              </View>
              <SetaPraBaixo />
              <View style={styles.viewRow}>
                <Text style={styles.textFormula}>f</Text>
                <Igual />
                <Text style={styles.textFormula}>{resultado} rpm</Text>

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

export default Rotacao