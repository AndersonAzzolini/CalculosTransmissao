import React, { useState } from 'react';
import {
  Alert,
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

const VelocidadePeriferica = () => {
  const [resultado, setResultado] = useState(0)
  const [n, setN] = useState(0)
  const [raio, setRaio] = useState(0)
  const [toolTipVisible, setToolTipVisible] = useState(false)
  const [toolTipVisible2, setToolTipVisible2] = useState(false)
  const [resultadoMultiplicacao, setResultadoMultiplicacao] = useState(0)
  const pi = 3.141592654

  const calcular = () => {
    if ((!isNaN(raio) && !isNaN(n) && raio && n)) {
      setResultadoMultiplicacao(pi * n * raio)
      setResultado((pi * n * raio / 30).toFixed(3).replace('.', ','))
    } else {
      Alert.alert(
        'Erro',
        'Verifique os valores informados, são obrigatatórios e devem ser números'
      )
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container}>
        < View style={styles.viewOpcaoFormulas}>
          <View style={styles.viewFormulaUtilizada}>
            <Text style={styles.textFormulaUtilizada}>Formula utilizada: </Text>
            <Text style={styles.textFormula}>Vp</Text>
            <Igual />
            <Divisao
              numerador={'π.n.r'}
              denominador={'30'}
            />
          </View>
          <View style={styles.viewInputs} >
            <Text>n = Rotação (rpm)</Text>
            <Text>r = Raio (m)</Text>
            <Text>π = 3.141592654 (rad)</Text>
            <View style={styles.viewRow}>
              <View style={{ justifyContent:'space-around'}}>

                <Text style={{  marginRight: 10 }}>Valor da rotação (rpm):</Text>
                <Text style={{  marginRight: 10 }}>Valor do raio (m):</Text>
              </View>
              <View>

                <Input
                  value={n}
                  onChangeText={(text) => setN(text.replace(',', '.'))}
                  keyboardType="phone-pad"
                />
                <Input
                  value={raio}
                  onChangeText={(text) => setRaio(text.replace(',', '.'))}
                  keyboardType="phone-pad"
                />
              </View>

            </View>
            <Button
              text='calcular'
              onPress={() => calcular()} />
          </View>

          {
            resultado ?
              <View style={styles.viewCalculos}>
                <View style={styles.viewRow}>
                  <Text style={styles.textFormula}>Vp</Text>
                  <Igual />
                  <Divisao
                    numerador='π.n.r'
                    denominador='30' />
                </View>
                <SetaPraBaixo />
                <Pressable
                  onPress={() => setToolTipVisible(true)}>
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
                        numerador={`${pi.toFixed(3)}.${n}.${raio}`}
                        denominador={`30`} />
                    </Tooltip>
                    <View style={styles.viewBalao}>
                      <IconInterrogacao />
                    </View>
                  </View>
                </Pressable>
                <SetaPraBaixo />
                <Pressable
                  onPress={() => setToolTipVisible2(true)}
                >
                  <View style={styles.viewRow}>
                    <Text style={styles.textFormula}>f</Text>
                    <Igual />
                    <Tooltip
                      isVisible={toolTipVisible2}
                      content={<Text>FUNÇAO DA ADRi </Text>}
                      placement="top"
                      onClose={() => setToolTipVisible2(false)}
                    >
                      <Divisao
                        numerador={`${resultadoMultiplicacao.toFixed(3).replace('.', ',')}`}
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
                  <Text style={styles.textFormula}>{resultado} m/s</Text>
                </View>
              </View>
              :
              null
          }
        </View>
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

export default VelocidadePeriferica