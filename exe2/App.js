import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { useState } from 'react';

// You can import supported modules from npm
import { Button } from 'react-native-paper';

// or any files within the Snack
import Contador from './components/Contador';

export default function App() {
  const [ contador, setContador ] = useState(0);

  const incrementar = (valor) => {
    const resultado = contador + valor;

    if (resultado >= 0) {
      setContador(resultado);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Contador
      </Text>
      <Contador contagem={contador} style={[styles.paragraph, styles.contador]} />
      <View style={[styles.counterControls, styles.paragraph]}>
        <Button 
          mode="contained" 
          style={styles.counterButtons}
          labelStyle={styles.counterButtonsLabel}
          onPress={() => incrementar(-1)}>-</Button>
        <Button 
          mode="contained"
          style={styles.counterButtons}
          labelStyle={styles.counterButtonsLabel}
          onPress={() => incrementar(1)}>+</Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  counterControls: { 
    display: "flex", 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 10
  },
  counterButtons: {
    flexGrow: 1,
  },
  counterButtonsLabel: {
    fontSize: 20,
  },
  contador: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  }
});
