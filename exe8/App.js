import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';




function App(){
  return(
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      
        <View style={styles.box}>
         <Image
        source={{ uri: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"}}
        style={styles.image}
      />
      <Text style={styles.texto}> Bulbasaur Nº 0001 </Text>
      <Text style={styles.texto}> Type: Grass/Poison</Text>
        </View>

        <View style={styles.box}>
         <Image
        source={{ uri: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png"}}
        style={styles.image}
      />
      <Text style={styles.texto}> Ivysaur Nº 0002 </Text>
      <Text style={styles.texto}> Type: Grass/Poison</Text>
        </View>

        <View style={styles.box}>
         <Image
        source={{ uri: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png"}}
        style={styles.image}
      />
      <Text style={styles.texto}> Venusaur Nº 0003 </Text>
      <Text style={styles.texto}> Type: Grass/Poison</Text>
        </View>

        <View style={styles.box}>
         <Image
        source={{ uri: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png"}}
        style={styles.image}
      />
      <Text style={styles.texto}> Charmander Nº 0004 </Text>
      <Text style={styles.texto}> Type: Fire</Text>
        </View>

        <View style={styles.box}>
        <Image
        source={{ uri: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png"}}
        style={styles.image}
      />
      <Text style={styles.texto}> Charmeleon Nº 0005 </Text>
      <Text style={styles.texto}> Type: Fire</Text>
        </View>

        <View style={styles.box}>
        <Image
        source={{ uri: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png"}}
        style={styles.image}
      />
      <Text style={styles.texto}> Charrizard Nº 0006 </Text>
      <Text style={styles.texto}> Type: Fire/Flying</Text>
        </View>

        <View style={styles.box}>
        <Image
        source={{ uri: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png"}}
        style={styles.image}
      />
      <Text style={styles.texto}> Squirtle Nº 0007 </Text>
      <Text style={styles.texto}> Type: Water</Text>
        </View>

        <View style={styles.box}>
        <Image
        source={{ uri: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png"}}
        style={styles.image}
      />
      <Text style={styles.texto}> Wartortle Nº 0008 </Text>
      <Text style={styles.texto}> Type: Water</Text>
        </View>

        <View style={styles.box}>
        <Image
        source={{ uri: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png"}}
        style={styles.image}
      />
      <Text style={styles.texto}> Blastoise Nº 0009 </Text>
      <Text style={styles.texto}> Type: Water</Text>
        </View>
        
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  box:{
    borderWidth:5,
    height: 300,
    width: 200,
  },
  image:{
      width: 150,
      height: 150,
      margin: 20,
    },
  texto:{
    fontSize: 20,
    fontWeight: 'bold',
  }
})




export default App;
