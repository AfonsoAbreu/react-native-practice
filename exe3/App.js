import { View, StyleSheet } from 'react-native';
import { useState } from 'react';

// You can import supported modules from npm
import { Text, Button, TextInput } from 'react-native-paper';

export default function App() {
  const [ primeiroValor, setPrimeiroValor ] = useState();
  const [ segundoValor, setSegundoValor ] = useState();
  const [ resultado, setResultado ] = useState();

  const calcular = () => {
    const numero1 = Number(primeiroValor);
    const numero2 = Number(segundoValor);

    if (!isNaN(numero1) && !isNaN(numero2)) {
      setResultado(numero1 * numero2);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Multiplicador de números
      </Text>
      <View style={styles.fields}>
        <TextInput mode='outlined' label='Primeiro número' onChangeText={setPrimeiroValor} dense />
        <TextInput mode='outlined' label='Segundo número' onChangeText={setSegundoValor} dense />
        <Button mode="contained" onPress={calcular}>
          Calcular
        </Button>
      </View>

      {
        resultado !== undefined &&
        <Text style={styles.paragraph}>Resultado: {resultado}</Text>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 18,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  fields: {
    display: 'flex',
    gap: 8
  }
});
