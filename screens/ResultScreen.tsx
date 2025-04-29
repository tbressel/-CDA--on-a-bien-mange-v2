import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

// type imports
import { RootStackParamList } from '../types/types';

// components imports
import HomeButton from '../components/HomeButton';

export default function ResultScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'Result'>>();
  const { data } = route.params;

  // Assurez-vous que 'data' contient un produit avant d'afficher
  const product = data && data.product;
  console.log('product à afficher', data)
  console.log('product à afficher', product)

  return (
    <View style={styles.container}>
      <HomeButton />
      <Text style={styles.title}>Résultat</Text>
      
      {data ? (
        <>
          <Text>Nom du produit : {data.product_name}</Text>
          <Text>Code-barres : {data.code}</Text>
          <Text>Note nutritionnelle : {data.nutrition_grade_fr}</Text>
          <Text>Ingrédients : {data.ingredients_text_fr || 'Aucun ingrédient disponible'}</Text>
          <Text>Marque : {data.brands || 'Non spécifié'}</Text>
          <Image source={{ uri: data.image_url }} style={{ width: 300, height: 300 }} />
        </>
      ) : (
        <Text>Aucun produit trouvé</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
