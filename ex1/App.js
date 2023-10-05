import { View, Text, Image, StyleSheet} from 'react-native';


export default function App(){
  return(
    <View style={styles.container}>
          <Quack />

      <Text style={styles.title}>Dados Pessoais:</Text>
        <Text style={styles.conteudo}>quack</Text>

      <Text style={styles.title}>Formação:</Text>
        <Text style={styles.conteudo}>quack</Text>

      <Text style={styles.title}>Experiência:</Text>
        <Text style={styles.conteudo}>quack</Text>

      <Text style={styles.title}>Projetos:</Text>
        <Text style={styles.conteudo}>quack</Text>

    </View>
  )
}




function Quack() {  
    let img = "https://i.pinimg.com/originals/5c/57/9c/5c579c7a7d1ab78527386421b6e98742.png";


    return(
        <Image
        source={{ uri: img }}
        style={styles.image}
      />
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 0,
  },
  image:{
    width: 200, 
    height:  200,
    marginTop: 200,
    marginBottom:20,
    left: 100,
  },
  title:{
    fontSize:20,
    left: 40,
    fontWeight:"bold",
  },
  conteudo:{
    fontSize:15,
    left: 40,
    marginBottom: 20,
  },
})

