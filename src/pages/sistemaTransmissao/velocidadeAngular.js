import React, { useState } from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { RadioButton } from 'react-native-radio-buttons-group';
import Tooltip from 'react-native-walkthrough-tooltip';
import Button from '../../components/button';
import SetaPraBaixo from '../../components/imagem';
import Input from '../../components/input';
import IconInterrogacao from '../../components/interrogacao';
import Igual from '../../components/matematicos/igual';
import Divisao from '../../components/matematicos/umDivididoPorUm';

const VelocidadeAngular = () => {
  const [resultado, setResultado] = useState(0)
  const [n, setN] = useState(0)
  const [variacaoAngular, setVariacaoAngular] = useState(0)
  const [variacaoTempo, setVariacaoTempo] = useState(0)
  const [utilizarVariacao, setUtilizarVariacao] = useState(false)
  const [utilizarVelocidade, setUtilizarVelocidade] = useState(false)
  const [toolTipVisible, setToolTipVisible] = useState(false)

  const defineFormula = (value) => {
    if (value == 1) {
      setUtilizarVariacao(true)
      setUtilizarVelocidade(false)
      setResultado(0)
      setN(0)
    }
    if (value == 2) {
      setUtilizarVariacao(false)
      setUtilizarVelocidade(true)
      setResultado(0)
      setVariacaoAngular(0)
      setVariacaoTempo(0)
    }
  }
  const calcular = () => {
    if (utilizarVariacao) {
      if (!isNaN(variacaoAngular >= 0) && !isNaN(variacaoTempo >= 0)) {
        setResultado((parseFloat(variacaoAngular.replace(',', '.')) / parseFloat(variacaoTempo.replace(',', '.'))).toFixed(2).replace('.', ','))
      } else {
        console.log('errp');
        Alert.alert(
          'Erro',
          'Verifique os valores informados, são obrigatatórios e devem ser números'
        )
      }
    }
    if (utilizarVelocidade) {
      if ((!isNaN(n) && n)) {
        setResultado((parseFloat(n.replace(',', '.')) / 30).toFixed(2).replace('.', ','))
      } else {
        Alert.alert(
          'Erro',
          `Verifique os valores informados, são obrigatatórios e devem ser números`
        )
      }
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
              label='Variação Angular/Tempo'
              onPress={(value) => defineFormula(value)}
              selected={utilizarVariacao}
            />
            <RadioButton
              id='2'
              label='Rotação'
              onPress={(value) => defineFormula(value)}
              selected={utilizarVelocidade}
            />
          </View>
        </View>
        {
          utilizarVariacao &&
          <>
            <View style={styles.viewFormulaUtilizada}>
              <Text style={styles.textFormulaUtilizada}>Formula utilizada: </Text>
              <Text style={styles.textFormula}>ω</Text>
              <Igual />
              <Divisao
                numerador={'Δφ'}
                denominador={'Δt'}
              />
              <Text style={styles.textFormula}></Text>
            </View>
            <View style={styles.viewInputs}>
              <Text>Δφ = Variação Angular (rad/s)</Text>
              <Text>Δt = Variação de Tempo (s)</Text>
              <Input
                placeholder='Valor da variação angular (rad/s)'
                value={variacaoAngular}
                onChangeText={(text) => setVariacaoAngular(text)}
                keyboardType="phone-pad"
              />
              <Input
                placeholder='Valor da variação de tempo (s)'
                value={variacaoTempo}
                onChangeText={(text) => setVariacaoTempo(text)}
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
              <Text style={styles.textFormula}>ω</Text>
              <Igual />
              <Divisao
                numerador={'π.n'}
                denominador={'30'}
              />
            </View>
            <View style={styles.viewInputs} >
              <Text>n = Rotação (rpm)</Text>
              <Input
                placeholder='Valor de n (rpm)'
                value={n}
                onChangeText={(text) => setN(text)}
                keyboardType="phone-pad"
              />
              <Button
                text='calcular'
                onPress={() => calcular()} />
            </View>
          </>
        }
        {
          utilizarVariacao && resultado ?
            <View style={styles.viewCalculos}>
              <View style={styles.viewRow}>
                <Text style={styles.textFormula}>ω</Text>
                <Igual />
                <Divisao
                  numerador={'Δφ'}
                  denominador={'Δt'}
                />
              </View>
              <SetaPraBaixo />
              <Pressable
                onPress={() => setToolTipVisible(true)}>
                <View style={styles.viewRow}>
                  <Text style={styles.textFormula}>ω</Text>
                  <Igual />
                  <Tooltip
                    isVisible={toolTipVisible}
                    content={<Text>FUNÇAO DA ADRisdasfsa </Text>}
                    placement="top"
                    onClose={() => setToolTipVisible(false)}
                  >
                    <Divisao
                      numerador={`${variacaoAngular} rad/s`}
                      denominador={`${variacaoTempo} s`}
                    />
                  </Tooltip>
                  <View style={styles.viewBalao}>
                    <IconInterrogacao />
                  </View>
                </View>
              </Pressable>
              <SetaPraBaixo />
              <View style={styles.viewRow}>
                <Text style={styles.textFormula}>ω</Text>
                <Igual />
                <Text style={styles.textFormula}>{resultado} rad/s</Text>

              </View>
            </View>
            : null
        }
        {
          utilizarVelocidade && resultado ?
            <View style={styles.viewCalculos}>
              <View style={styles.viewRow}>
                <Text style={styles.textFormula}>ω</Text>
                <Igual />
                <Divisao
                  numerador='π.n'
                  denominador='30' />
              </View>
              <SetaPraBaixo />
              <Pressable
                onPress={() => setToolTipVisible(true)}
              >
                <View style={styles.viewRow}>
                  <Text style={styles.textFormula}>f</Text>
                  <Igual />
                  <Tooltip
                    isVisible={toolTipVisible}
                    content={<Text>FUNÇAO DA ADRi </Text>}
                    placement="top"
                    onClose={() => setToolTipVisible(false)}
                  >
                    <Divisao
                      numerador={`${n} rad/s`}
                      denominador={`30`} />
                  </Tooltip>
                  <View style={styles.viewBalao}>
                    <IconInterrogacao />
                  </View>
                </View>
              </Pressable>
              <SetaPraBaixo />
              <View style={styles.viewRow}>
                <Text style={styles.textFormula}>f</Text>
                <Igual />
                <Text style={styles.textFormula}>{resultado} rad/s</Text>
              </View>
            </View>
            : null
        }
      </View>
    </ScrollView >
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
  viewCalculos: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50
  },
  viewRow: {
    flexDirection: 'row',
  },
  viewBalao: {
    marginLeft: 10
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

export default VelocidadeAngular