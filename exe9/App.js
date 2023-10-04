import { View, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';
import { Text, Card, Paragraph, Avatar, Chip } from 'react-native-paper';
import { format } from './MoneyFormatter';
import * as Linking from 'expo-linking';

export default function App() {
  const [ vagas, setVagas ] = useState([
    {
      id: 0,
      nome: "Desenvolvedor backend",
      salario: 3000,
      descricao: "Lorem ipsum dolor sit amet blablabla",
      contato: "+55 (13) 99999-9999",
    },
    {
      id: 1,
      nome: "Desenvolvedor backend",
      salario: 3000,
      descricao: "Lorem ipsum dolor sit amet blablabla",
      contato: "+55 (13) 99999-9999",
    },
    {
      id: 2,
      nome: "Desenvolvedor backend",
      salario: 3000,
      descricao: "Lorem ipsum dolor sit amet blablabla",
      contato: "+55 (13) 99999-9999",
    },
    {
      id: 3,
      nome: "Desenvolvedor backend",
      salario: 3000,
      descricao: "Lorem ipsum dolor sit amet blablabla",
      contato: "+55 (13) 99999-9999",
    },
    {
      id: 4,
      nome: "Desenvolvedor backend",
      salario: 3000,
      descricao: "Lorem ipsum dolor sit amet blablabla",
      contato: "+55 (13) 99999-9999",
    },
    {
      id: 5,
      nome: "Desenvolvedor backend",
      salario: 3000,
      descricao: "Lorem ipsum dolor sit amet blablabla",
      contato: "+55 (13) 99999-9999",
    },
    {
      id: 6,
      nome: "Desenvolvedor backend",
      salario: 3000,
      descricao: "Lorem ipsum dolor sit amet blablabla",
      contato: "+55 (13) 99999-9999",
    },
    {
      id: 7,
      nome: "Desenvolvedor backend",
      salario: 3000,
      descricao: "Lorem ipsum dolor sit amet blablabla",
      contato: "+55 (13) 99999-9999",
    },    
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Vagas
      </Text>

      <FlatList
        data={vagas}
        keyExtractor={vaga => vaga.id}
        renderItem={({ item }) => <Vaga style={styles.flatListItem} {...item} />}
      />

    </View>
  );
}

function Vaga({ id, nome, salario, descricao, contato, ...props }) {
  const leftIcon = props => <Avatar.Icon {...props} icon="briefcase" />

  const onContactClick = () => {
    Linking.openURL(`tel:${contato}`)
  }

  return (
    <Card key={id} {...props}>
      <Card.Title title={nome} subtitle={format(salario)} left={leftIcon} />
      <Card.Content style={styles.cardContent}>
        <Paragraph>{descricao}</Paragraph>
        <View>
        <Chip icon="phone" onPress={onContactClick}>{contato}</Chip>
        </View>
      </Card.Content>
    </Card>
  )
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
  cardContent: {
    alignItems: 'flex-start'
  },
  flatListItem: {
    marginBottom: 15
  }
});
