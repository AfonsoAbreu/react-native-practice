import { useState } from 'react'
import { View, Text, Image, StyleSheet, Button, TextInput } from 'react-native'




export default function App(){
  const [altura, setAltura] = useState()
  const [peso, setPeso] = useState()
  const [info, setInfo] = useState(" ")

    const calculaIMC = () => {
    let imc = peso / (altura * altura)
    resultado = imc

    if(resultado < 18.5){
    setInfo('Menor que 18,5, seu quadro é de: Magreza')
    }
    else if (resultado < 24.9){
    setInfo('Entre 18,5 e 24,9, seu quadro é: Normal')
    }
    else if (resultado < 29.9){
    setInfo('Entre 25,0 e 29,9, você está com: Sobrepeso')
    }
    else if (resultado < 39.9) {
    setInfo('Entre 30,0 e 39,9, tome cuidado, você está com: Obesidade')
    }
    else if (resultado > 39.9) {
    setInfo('Maior que 40,0, você está com: Obesidade Grave')
    }
  }

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}> Cálculo de IMC</Text>

        <IMC />

      <TextInput
      style={styles.input}
      placeholder="Peso"
      onChangeText={setPeso}
      />


      <TextInput
      style={styles.input}
      placeholder="Altura"
      onChangeText={setAltura}
      />


      <Button title='Verificar' color='blue' onPress={calculaIMC}/>


      <Text>Seu IMC é: {info}</Text>
    </View>
  )

  
}



function IMC() {  
    let img = "https://www.etiqueteando.com/wp-content/uploads/2021/07/IMC-2.jpg";


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
    input:{
      height: 45,
      borderWidth: 1,
      borderColor: '#222',
      margin: 10,
      fontSize: 20,
      padding: 10,
    },
    titulo:{
      marginTop: 50,
      textAlign: 'center',
      fontSize: 25,
    },
    image:{
      width: 300,
      height:200,
      left: 45,
    }
  });




