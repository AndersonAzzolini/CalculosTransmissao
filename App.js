import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from './components/button';
import Input from './components/input';


const App = () => {
  const [d1, setd1] = useState(0)
  const [d2, setd2] = useState(0)
  const [n1, setn1] = useState(0)
  const [n2, setn2] = useState(0)


  const calcular = () => {

    if (!n1) {
      let resultado = (d2 * n2) / d1
      console.log('n1 ' + resultado);
    } else if (!n2) {
      let resultado = (d1 * n1) / d2
      console.log('n2 ' + resultado);
    } else if (!d1) {
      let resultado = (n2 * d2) / n1
      console.log('d1 ' + resultado);
    } else if (!d2) {
      let resultado = (n1 * d1) / n2
      console.log('d2 ' + resultado);
    }
    // console.log('DPMotora ' + d1);
    // console.log('DPMovida ' + d2);
    // console.log('NPMotora ' + n1);
    // console.log('NPMovida ' + n2);
  }

  return (
    <View style={styles.container}>
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

    </View>
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
})
export default App;
