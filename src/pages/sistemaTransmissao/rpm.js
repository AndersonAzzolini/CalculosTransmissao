import React, { useState } from 'react';
import {
  Alert,
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

  const calcular = () => {
    if ((n2 && d1 && d2) || (n1 && d1 && d2) || (n1 && n2 && d2) || (n1 && n2 && d1)) {
      if (n1 && n2 && d1 && d2) {
        Alert.alert(
          'Erro',
          'É utilizado apenas 3 valores'
        )
      }
      if (!n1) {
        setResultado(((n2 * d2) / d1).toFixed(2));
        setValorAProcurar('n1')
        defineValores(n2, d2, d1)
      } else if (!n2) {
        setResultado(((n1 * d1) / d2).toFixed(2));
        setValorAProcurar('n2')
        defineValores(n1, d1, d2)
      } else if (!d1) {
        setResultado(((d2 * n2) / n1).toFixed(2));
        setValorAProcurar('D1')
        defineValores(d2, n2, n1)
      } else if (!d2) {
        setResultado(((d1 * n1) / n2).toFixed(2));
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
        <View style={styles.viewRow}>
          <Divisao
            numerador={`${n1 || 'n1'}`}
            denominador={`${n2 || 'n2'}`} />
          <Igual />
          <Divisao
            numerador={`${d2 || 'D2'}`}
            denominador={`${d1 || 'D1'}`} />
        </View>
        <SetaPraBaixo />
        <View style={styles.viewRow}>
          <Text style={styles.textValorAProcurarERsultado}>{valorAprocurar} = </Text>
          <Divisao
            numerador={`${primeroMultiplicador}.${segundoMultiplicador}`}
            denominador={`${denominador}`} />
        </View>
        <SetaPraBaixo />
        <Text style={styles.textValorAProcurarERsultado}>{valorAprocurar} = {resultado} RPM </Text>
      </View >
    )
  }

  return (
    <ScrollView>
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
          <Input
            placeholder='RPM polia motora (n1)'
            value={n1}
            onChangeText={(text) => setn1(text)}
            keyboardType="phone-pad"
          />
          <Input
            value={n2}
            onChangeText={(text) => setn2(text)}
            placeholder='RPM polia movida (n2)'
            keyboardType="phone-pad"
          />
          <Input
            value={d1}
            onChangeText={(text) => setd1(text)}
            placeholder='Diâmetro polia motora (D1)'
            keyboardType="phone-pad"
          />
          <Input
            value={d2}
            onChangeText={(text) => setd2(text)}
            placeholder='Diâmetro polia movida (D2)'
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
    </ScrollView >
  );
};
const styles = StyleSheet.create({
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
  viewCalculos: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50
  },
  viewRow: {
    flexDirection: 'row'
  },
  viewFormulaUtilizada: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'center',
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
  resultado: {
    flex: 1,
    justifyContent: 'center'
  },
  textResultado: {
    textAlign: 'center'
  },
  textBold: {
    fontWeight: "bold"
  },
  textFormula: {
    textAlignVertical: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

})


export default Rpm