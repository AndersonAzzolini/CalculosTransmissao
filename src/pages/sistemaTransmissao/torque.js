import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from '../../components/button';
import Input from '../../components/input';

const Torque = () => {
  const [f, setF] = useState(0)
  const [s, setS] = useState(0)
  const [resultado, setResultado] = useState(0)

  const calcular = () => {
    if (f && s) {
      setResultado(f * s)
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.viewInputs}>
          <Text>F</Text>
          <Input
            placeholder='Valor de F'
            value={f}
            onChangeText={(text) => setF(text)}
            keyboardType="phone-pad"
          />
          <Text>S</Text>
          <Input
            value={s}
            onChangeText={(text) => setS(text)}
            placeholder='Valor de S'
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


export default Torque