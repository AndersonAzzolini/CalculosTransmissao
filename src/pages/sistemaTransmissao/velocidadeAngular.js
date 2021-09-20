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

const VelocidadeAngular = () => {
  const [resultado, setResultado] = useState(0)
  const [n, setN] = useState(0)
  const pi = 3.141592654

  const calcular = () => {
    if (n) {
      let resultado = pi * n / 30
      setResultado(resultado)
    } else {
      Alert.alert(
        'Erro',
        `É necessário informar valor de N`
      )
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.viewInputs}>
          <Text>N</Text>
          <Input
            value={n}
            onChangeText={(text) => setN(text)}
            placeholder='Valor de N'
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


export default VelocidadeAngular