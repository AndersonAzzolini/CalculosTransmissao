import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from '../../components/button';
import Input from '../../components/input';

const RelacaoTransmissaoAdimensional = () => {
  const [resultado, setResultado] = useState(0)
  const [d1, setD1] = useState(0)
  const [d2, setD2] = useState(0)
  const [mt1, setMt1] = useState(0)
  const [mt2, setMt2] = useState(0)
  const [t1, setT1] = useState(0)
  const [t2, setT2] = useState(0)
  const [w1, setW1] = useState(0)
  const [w2, setW2] = useState(0)
  const [f1, setF1] = useState(0)
  const [f2, setF2] = useState(0)
  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(0)
  const [z1, setZ1] = useState(0)
  const [z2, setZ2] = useState(0)

  const calcular = () => {
    if (d1 && d2) {
      setResultado(dividePorNumerador(d1, d2))
    }
    if (mt1 && mt2) {
      setResultado(dividePorNumerador(mt1, mt2))
    }
    if (t1 && t2) {
      setResultado(dividePorNumerador(t1, t2))
    }
    if (z1 && z2) {
      setResultado(dividePorNumerador(z1, z2))
    }
    if (w1 && w2) {
      setResultado(dividePorDenominador(w1, w2))
    }
    if (f1 && f2) {
      setResultado(dividePorDenominador(f1, f2))
    }
    if (n1 && n2) {
      setResultado(dividePorDenominador(n1, n2))
    }
  }

  const dividePorDenominador = (valorNumerador, valorDenominador) => {
    return valorNumerador / valorDenominador
  }

  const dividePorNumerador = (valorNumerador, valorDenominador) => {
    return valorDenominador / valorNumerador
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.viewInputs}>
          <Text>Calcular com valor de D1 e D2</Text>
          <Input
            value={d1}
            onChangeText={(text) => setD1(text)}
            placeholder='Valor de D1'
            keyboardType="phone-pad"
          />
          <Input
            value={d2}
            onChangeText={(text) => setD2(text)}
            placeholder='Valor de D2'
            keyboardType="phone-pad"
          />
          <Text>Calcular com valor de Mt1 e Mt2</Text>
          <Input
            value={mt1}
            onChangeText={(text) => setMt1(text)}
            placeholder='Valor de Mt1'
            keyboardType="phone-pad"
          />
          <Input
            value={mt2}
            onChangeText={(text) => setMt2(text)}
            placeholder='Valor de Mt2'
            keyboardType="phone-pad"
          />
          <Text>Calcular com valor de T1 e T2</Text>
          <Input
            value={t1}
            onChangeText={(text) => setT1(text)}
            placeholder='Valor de T1'
            keyboardType="phone-pad"
          />
          <Input
            value={t2}
            onChangeText={(text) => setT2(text)}
            placeholder='Valor de T2'
            keyboardType="phone-pad"
          />

          <Text>Calcular com valor de ω1 e ω2</Text>
          <Input
            value={w1}
            onChangeText={(text) => setW1(text)}
            placeholder='Valor de ω1'
            keyboardType="phone-pad"
          />
          <Input
            value={w2}
            onChangeText={(text) => setW2(text)}
            placeholder='Valor de ω2'
            keyboardType="phone-pad"
          />

          <Text>Calcular com valor de f1 e f2</Text>
          <Input
            value={f1}
            onChangeText={(text) => setF1(text)}
            placeholder='Valor de f1'
            keyboardType="phone-pad"
          />
          <Input
            value={f2}
            onChangeText={(text) => setF2(text)}
            placeholder='Valor de f2'
            keyboardType="phone-pad"
          />

          <Text>Calcular com valor de n1 e n2</Text>
          <Input
            value={n1}
            onChangeText={(text) => setN1(text)}
            placeholder='Valor de n1'
            keyboardType="phone-pad"
          />
          <Input
            value={n2}
            onChangeText={(text) => setN2(text)}
            placeholder='Valor de n2'
            keyboardType="phone-pad"
          />

          <Text>Calcular com valor de z1 e z2</Text>
          <Input
            value={z1}
            onChangeText={(text) => setZ1(text)}
            placeholder='Valor de z1'
            keyboardType="phone-pad"
          />
          <Input
            value={z2}
            onChangeText={(text) => setZ2(text)}
            placeholder='Valor de z2'
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
    </ScrollView>
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


export default RelacaoTransmissaoAdimensional