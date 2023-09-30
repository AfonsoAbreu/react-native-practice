import { Card, Title } from 'react-native-paper'

export default function Contador({ contagem, ...outros }) {
  return (
    <Card {...outros}>
      <Card.Content>
        <Title 
          style={{ 
            textAlign: "center", 
            fontWeight: "bold", 
            fontSize: 60
          }}
        >{contagem}</Title>
      </Card.Content>
    </Card>
  );
}