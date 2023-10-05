import { useState } from 'react'
import { View, Text, Image, StyleSheet, Button, TextInput } from 'react-native'




export default function App(){

  const [resultado, setResultado] = useState(" ")

    const numeroAleatorio = () => {
    setResultado(Math.floor(Math.random() * 11));
  }

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}> Jogo do Número Aleatório</Text>

        <Charada />


      <Text style={styles.titulo}> Pense em um nº de 0 a 10</Text>

      <Text style={styles.resultado}>____{resultado}____ </Text>

      <Button title='Descobrir' color='blue' onPress={numeroAleatorio}/>


      
    </View>
  )

  
}



function Charada() {  
    let img = "https://1.bp.blogspot.com/-kY1ZtoOIVEs/XmXHKUbRRHI/AAAAAAACeVg/A9spwGzj_LIBnhE0ntKsLae3WAi5F6AaACLcBGAsYHQ/s1600/a5733481a2ce738e1156f07d0dc81f81.jpg";


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
    },
    titulo:{
      marginTop: 50,
      textAlign: 'center',
      fontSize: 25,
      marginBottom:30,
    },
    image:{
      width: 250,
      height:300,
      left: 45,
    },
    resultado:{
      textAlign: 'center',
       marginBottom:30,
       fontSize: 25,
       textDecorationLine: 'underline',
    }
  });