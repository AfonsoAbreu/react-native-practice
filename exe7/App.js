import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useReducer, useState } from 'react';
import { Text, Button, TextInput, Caption, Switch, Title, Paragraph } from 'react-native-paper';
import Slider from '@react-native-community/slider';

export default function App() {
  const escolaridadeDict = [
    "Fundamental - Incompleto",
    "Fundamental - Completo",
    "Médio - Incompleto",
    "Médio - Completo",
    "Superior - Incompleto",
    "Superior - Completo",
    "Pós-graduação (Lato senso) - Incompleto",
    "Pós-graduação (Lato senso) - Completo",
    "Pós-graduação (Stricto sensu, nível mestrado) - Incompleto",
    "Pós-graduação (Stricto sensu, nível mestrado) - Completo",
    "Pós-graduação (Stricto sensu, nível doutor) - Incompleto",
    "Pós-graduação (Stricto sensu, nível doutor) - Completo",
  ];

  const sexoDict = [
    "Feminino",
    "Masculino",
  ];

  function reducer(state, action) {
    return {
      ...state,
      [action.type]: action.value
    };
  }

  const [ state, dispatch ] = useReducer(reducer, { 
    brasileiro: false 
  });
  const [ estadoSalvo, setEstadoSalvo ] = useState();

  const onChangeDict = {
    'nome': value => dispatch({ type: 'nome', value }),
    'idade': value => dispatch({ type: 'idade', value }),
    'sexo': (value) => dispatch({ type: 'sexo', value }),
    'escolaridade': (value) => dispatch({ type: 'escolaridade', value }),
    'limite': value => dispatch({ type: 'limite', value }),
    'brasileiro': () => dispatch({ type: 'brasileiro', value: !state.brasileiro }),
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Abertura de Conta
      </Text>

      <View style={styles.fields}>
        <TextInput mode='outlined' label='Nome' onChangeText={onChangeDict['nome']} dense />
        <TextInput mode='outlined' label='Idade' onChangeText={onChangeDict['idade']} dense/>


        <View>
          <Caption>Sexo</Caption>
          <Picker mode="dialog" selectedValue={state.sexo ?? -1} onValueChange={onChangeDict['sexo']}>
            <Picker.Item key={-1} value={-1} label="Selecione..." enabled={false} />
            {
              sexoDict.map((sexo, i) => 
                <Picker.Item key={i} value={i} label={sexo} />
              )
            }
          </Picker>
        </View>

        <View>
          <Caption>Escolaridade</Caption>
          <Picker mode="dialog" selectedValue={state.escolaridade ?? -1} onValueChange={onChangeDict['escolaridade']}>
            <Picker.Item key={-1} value={-1} label="Selecione..." enabled={false} />
            {
              escolaridadeDict.map((escolaridade, i) => 
                <Picker.Item key={i} value={i} label={escolaridade} />
              )
            }
          </Picker>
        </View>

        <View>
          <Caption>Limite:</Caption>
          <Slider
            minimumValue={0}
            maximumValue={1000}
            onValueChange={onChangeDict['limite']}
            value={state.limite}
            step={1}
          />
        </View>

        <View>
          <Caption>Brasileiro:</Caption>
          <Switch value={state.brasileiro ?? false} onValueChange={onChangeDict['brasileiro']} />
        </View>
        
        <Button mode="contained" onPress={() => setEstadoSalvo(state)} >
          Confirmar
        </Button>
      </View>

      {
        !!estadoSalvo &&
        <>
          <Title >
            Dados Informados:
          </Title>
          <Paragraph>Nome: {stringOrPlaceholder(estadoSalvo.nome)}</Paragraph>
          <Paragraph>Idade: {stringOrPlaceholder(estadoSalvo.idade)}</Paragraph>
          <Paragraph>Sexo: {stringOrPlaceholder(sexoDict[estadoSalvo.sexo])}</Paragraph>
          <Paragraph>Escolaridade: {stringOrPlaceholder(escolaridadeDict[estadoSalvo.escolaridade])}</Paragraph>
          <Paragraph>Limite: {numberOrPlaceholder(estadoSalvo.limite)}</Paragraph>
          <Paragraph>Brasileiro: {estadoSalvo.brasileiro ? "Sim" : "Não"}</Paragraph>
        </>
      }

    </View>
  );
}

const stringOrPlaceholder = string =>
  !string
    ? "Não informado"
    : string;

const numberOrPlaceholder = number =>
  isFinite(String(number))
    ? number
    : "Não informado";

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
