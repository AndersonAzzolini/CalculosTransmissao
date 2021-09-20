import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View} from 'react-native'
import Rpm from './pages/sistemaTransmissao/rpm';
import HomePage from './pages/homePage/home';
import Periodo from './pages/sistemaTransmissao/periodo';
import Frequencia from './pages/sistemaTransmissao/frequencia';
import Rotacao from './pages/sistemaTransmissao/rotacao';
import VelocidadeAngular from './pages/sistemaTransmissao/velocidadeAngular';
import VelocidadePeriferica from './pages/sistemaTransmissao/velocidadePerifica';
import RelacaoTransmissaoAdimensional from './pages/sistemaTransmissao/realacaoTransmissaoAdimensional';
import Torque from './pages/sistemaTransmissao/torque';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#EEEEEE' }}>
        <NavigationContainer >
          <Stack.Navigator initialRouteName="Home Page" headerMode='none'>
            <Stack.Screen name="Rpm" component={Rpm} />
            <Stack.Screen name="Home Page" component={HomePage} />
            <Stack.Screen name="Período" component={Periodo} />
            <Stack.Screen name="Frequência" component={Frequencia} />
            <Stack.Screen name="Rotação" component={Rotacao} />
            <Stack.Screen name="Velocidade Angular" component={VelocidadeAngular} />
            <Stack.Screen name="Velocidade Periférica" component={VelocidadePeriferica} />
            <Stack.Screen name="Relação de Transmissão" component={RelacaoTransmissaoAdimensional} />
            <Stack.Screen name="Torque" component={Torque} />
          </Stack.Navigator>
        </NavigationContainer>
    </View>
  );
}

export default App;