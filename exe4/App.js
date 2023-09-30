import { View, StyleSheet, Image } from 'react-native';
import { useState } from 'react';

// You can import supported modules from npm
import { Text, Button, TextInput } from 'react-native-paper';

import snackIcon from './assets/snack-icon.png';

export default function App() {
  const [ precoAlcool, setPrecoAlcool ] = useState();
  const [ precoGasolina, setPrecoGasolina ] = useState();
  const [ resultado, setResultado ] = useState();

  const calcular = () => {
    const numero1 = Number(precoAlcool);
    const numero2 = Number(precoGasolina);

    if (isNaN(numero1) || isNaN(numero2) || precoGasolina === 0 || precoAlcool === 0) {
      return;
    }
    
    const resposta = (precoAlcool / precoGasolina) >= 0.7
      ? "Gasolina"
      : "Alcool";
    setResultado(resposta);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Alcool ou Gasolina
      </Text>

      <Image source={snackIcon} style={styles.image} />
      
      <View style={styles.fields}>
        <TextInput mode='outlined' label='Preço do Alcool' onChangeText={setPrecoAlcool} dense />
        <TextInput mode='outlined' label='Preço da Gasolina' onChangeText={setPrecoGasolina} dense />
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
  image: {
    marginVertical: 16,
    maxWidth: 200,
    width: '80%',
    resizeMode: 'contain',
    alignSelf: 'center',
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
