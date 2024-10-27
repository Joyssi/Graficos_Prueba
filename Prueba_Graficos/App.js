import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

//Importación del componente contenedor de Gráficos
import Graficos from './src/components/Graficos';

//Importacion del componente Formulario.js
import Formulario from './src/components/Formulario';


export default function App() {


  return (
    <View style={styles.container} >
      <ScrollView contentContainerStyle={styles.scrollView}>
      <Formulario/>
      <Graficos/>
      </ScrollView>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    padding: 10,
  },
  graphContainer: {
    marginTop: 10,
    padding: 10,
  },
});
