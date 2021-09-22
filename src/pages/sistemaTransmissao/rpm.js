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

const Rpm = () => {
  const [d1, setd1] = useState(0)
  const [d2, setd2] = useState(0)
  const [n1, setn1] = useState(0)
  const [n2, setn2] = useState(0)
  const [resultado, setResultado] = useState(0)
  const [valorAprocurar, setValorAProcurar] = useState('')
  const [primeroMultiplicador, setPrimeroMultiplicador] = useState(0)
  const [segundoMultiplicador, setSegundoMultiplicador] = useState(0)
  const [denominador, setDenominador] = useState(0)
  const [toolTipVisible, setToolTipVisible] = useState(false)
  const [toolTipVisible2, setToolTipVisible2] = useState(false)
  const [toolTipVisible3, setToolTipVisible3] = useState(false)

  const calcular = () => {
    if ((n2 && d1 && d2) || (n1 && d1 && d2) || (n1 && n2 && d2) || (n1 && n2 && d1)) {
      if (n1 && n2 && d1 && d2) {
        Alert.alert(
          'Erro',
          'É utilizado apenas 3 valores'
        )
      }
      if (!n1) {
        setResultado((n2 * 2 / d1).toFixed(2).replace('.', ','));
        setValorAProcurar('n1')
        defineValores(n2, d2, d1)
      } else if (!n2) {
        setResultado((n1 * d1 / d2).toFixed(2).replace('.', ','));
        setValorAProcurar('n2')
        defineValores(n1, d1, d2)
      } else if (!d1) {
        setResultado((d2 * n2 / n1).toFixed(2).replace('.', ','));
        setValorAProcurar('D1')
        defineValores(d2, n2, n1)
      } else if (!d2) {
        setResultado((d1 * n1 / n2).toFixed(2).replace('.', ','));
        setValorAProcurar('D2')
        defineValores(d1, n1, n2)
      }
      renderizaResultado()
    } else {
      Alert.alert(
        'Erro',
        'É necessário inserir ao menos 3 valores'
      )
    }

  }
  
  const defineValores = (value1, value2, value3) => {
    setPrimeroMultiplicador(value1)
    setSegundoMultiplicador(value2)
    setDenominador(value3)
  }

  const renderizaResultado = () => {
    return (
      <View style={styles.viewCalculos}>
        <View style={styles.viewRow}>
          <Divisao
            numerador='n1'
            denominador='n2' />
          <Igual />
          <Divisao
            numerador='D2'
            denominador='D1' />
        </View>
        <SetaPraBaixo />
        <Pressable
          onPress={() => setToolTipVisible(true)}>
          <Tooltip
            isVisible={toolTipVisible}
            content={<Text>FUNÇAO DA ADRisdasfsa </Text>}
            placement="top"
            onClose={() => setToolTipVisible(false)}
          >
            <View style={styles.viewRow}>
              <Divisao
                numerador={`${n1 || 'n1'}`}
                denominador={`${n2 || 'n2'}`} />
              <Igual />
              <Divisao
                numerador={`${d2 || 'D2'}`}
                denominador={`${d1 || 'D1'}`} />
              <View style={styles.viewBalao}>
                <IconInterrogacao />
              </View>
            </View>
          </Tooltip>
        </Pressable>
        <SetaPraBaixo />
        <Pressable
          onPress={() => setToolTipVisible2(true)}>
          <Tooltip
            isVisible={toolTipVisible2}
            content={<Text>FUNÇAO DA ADRisdasfsa </Text>}
            placement="top"
            onClose={() => setToolTipVisible2(false)}
          >
            <View style={styles.viewRow}>
              <Text style={styles.textValorAProcurarERsultado}>{valorAprocurar} = </Text>
              <Divisao
                numerador={`${primeroMultiplicador}.${segundoMultiplicador}`}
                denominador={`${denominador}`} />
              <View style={styles.viewBalao}>
                <IconInterrogacao />
              </View>

            </View>
          </Tooltip>
        </Pressable>
        <SetaPraBaixo />
        <Pressable
          onPress={() => setToolTipVisible3(true)}>
          <Tooltip
            isVisible={toolTipVisible3}
            content={<Text>FUNÇAO DA ADRisdasfsa </Text>}
            placement="top"
            onClose={() => setToolTipVisible3(false)}
          >
            <View style={styles.viewRow}>
              <Text style={styles.textValorAProcurarERsultado}>{valorAprocurar} = </Text>
              <Divisao
                numerador={`${primeroMultiplicador * segundoMultiplicador}`}
                denominador={`${denominador}`} />
              <View style={styles.viewBalao}>
                <IconInterrogacao />
              </View>
            </View>
          </Tooltip>
        </Pressable>
        <SetaPraBaixo />
        <Text style={styles.textValorAProcurarERsultado}>{valorAprocurar} = {resultado} RPM </Text>
      </View >
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container}>
        <View style={styles.viewFormulaUtilizada}>
          <Text style={styles.textFormulaUtilizada}>Formula utilizada: </Text>
          <Text style={styles.textFormula}>N</Text>
          <Igual />
          <Divisao
            numerador='n1'
            denominador='n2' />
          <Igual />
          <Divisao
            numerador='D2'
            denominador='D1' />
        </View>
        <Text style={styles.textBold}>São necessários apenas 3 valores</Text>
        <Text >N = Rotação (RPM)</Text>
        <Text >D = Diâmetro da polia (m)</Text>
        <View style={styles.viewInputs}>
          <View style={styles.viewRow}>
            <View style={styles.viewTextInputs}>
              <Text style={styles.textInputs}>RPM polia motora (n1):</Text>
              <Text style={styles.textInputs}>RPM polia movida (n2):</Text>
              <Text style={styles.textInputs}>Diâmetro polia motora (D1):</Text>
              <Text style={styles.textInputs}>Diâmetro polia movida (D2):</Text>
            </View>
            <View>
              <Input
                value={n1}
                onChangeText={(text) => setn1(text.replace(',', '.'))}
                keyboardType="phone-pad"
              />
              <Input
                value={n2}
                onChangeText={(text) => setn2(text.replace(',', '.'))}
                keyboardType="phone-pad"
              />
              <Input
                value={d1}
                onChangeText={(text) => setd1(text.replace(',', '.'))}
                keyboardType="phone-pad"
              />
              <Input
                value={d2}
                onChangeText={(text) => setd2(text.replace(',', '.'))}
                keyboardType="phone-pad"
              />
            </View>
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
    flexDirection: 'row'
  },
  viewTextInputs: {
    justifyContent: 'space-around'
  },
  viewFormulaUtilizada: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'center',
  },
  viewBalao: {
    marginLeft: 10
  },
  viewInputs: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    marginTop: 15
  },
  resultado: {
    flex: 1,
    justifyContent: 'center'
  },
  textResultado: {
    textAlign: 'center'
  },
  textInputs: {
    marginRight: 10
  },
  textBold: {
    fontWeight: "bold"
  },
  textFormula: {
    textAlignVertical: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textValorAProcurarERsultado: {
    textAlignVertical: 'center',
    fontSize: 17,
    marginLeft: 15
  },
  textFormulaUtilizada: {
    textAlignVertical: 'center',
    marginRight: 15,
    fontSize: 15
  },


})


export default Rpm