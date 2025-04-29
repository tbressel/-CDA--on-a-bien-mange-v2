import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

// type imports
import { RootStackParamList } from '../types/types';

// components imports
import HomeButton from '../components/HomeButton';




export default function ResultScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'Result'>>();
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <HomeButton />
      <Text style={styles.title}>Résultat</Text>
      <Text>Nom : {data.nom}</Text>
      <Text>Code-barres : {data.barcode}</Text>
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
