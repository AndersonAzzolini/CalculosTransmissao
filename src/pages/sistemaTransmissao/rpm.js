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
  const [exibirResultado, setExibirResultado] = useState(false)

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
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', }}>
          <Divisao
            numerador={`${n1 || 'n1'}`}
            denominador={`${n2 || 'n2'}`} />
          <Igual />
          <Divisao
            numerador={`${d2 || 'D2'}`}
            denominador={`${d1 || 'D1'}`} />
        </View>
        <SetaPraBaixo />
        <View style={{ flexDirection: 'row', }}>
          <Text style={{ textAlignVertical: 'center', fontSize: 17, marginLeft: 15 }}>{valorAprocurar} = </Text>
          <Divisao
            numerador={`${primeroMultiplicador}.${segundoMultiplicador}`}
            denominador={`${denominador}`} />
        </View>
        <SetaPraBaixo />
        <Text style={{ textAlignVertical: 'center', fontSize: 17, marginLeft: 15 }}>{valorAprocurar} = {resultado} RPM </Text>
      </View >
    )
  }

  return (
    <ScrollView
      keyboardShouldPersistTaps='handled'>

      <View style={styles.container}>
        <View style={{ flexDirection: 'row', marginBottom: 50 }}>
          <Divisao
            numerador='n1'
            denominador='n2' />
          <Igual />
          <Divisao
            numerador='D2'
            denominador='D1' />
        </View>
        <View>
          {resultado ?
            renderizaResultado() : null}
        </View>

        <View style={styles.viewInputs}>
          <Text>N1</Text>
          <Input
            placeholder='Rotação polia motora'
            value={n1}
            onChangeText={(text) => setn1(text)}
            keyboardType="phone-pad"
          />
          <Text>N2</Text>
          <Input
            value={n2}
            onChangeText={(text) => setn2(text)}
            placeholder='Rotação polia movida'
            keyboardType="phone-pad"

          />
          <Text>D1</Text>
          <Input
            value={d1}
            onChangeText={(text) => setd1(text)}
            placeholder='Diametro polia motora'
            keyboardType="phone-pad"

          />
          <Text>D2</Text>
          <Input
            value={d2}
            onChangeText={(text) => setd2(text)}
            placeholder='Diametro polia movida'
            keyboardType="phone-pad"

          />

          <Button
            text='calcular'
            onPress={() => calcular()} />
        </View>
        <View style={styles.resultado}>
          <Text style={styles.textResultado}>{resultado || ''}</Text>
        </View>
      </View>
    </ScrollView >
  );
};
const styles = StyleSheet.create({
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

})


export default Rpm