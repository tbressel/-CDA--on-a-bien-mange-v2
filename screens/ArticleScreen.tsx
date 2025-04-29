// react imports
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

// database imports
import { getAllAliments } from '../database/database';

// style import
import { articleStyle } from '../styles/ArticleStyle';




export default function ArticleScreen() {

  // states
  const [articles, setArticles] = useState<{ id: number; nom: string; barcode: string }[]>([]);


  /**
   * get all articles from database
   */
  useEffect(() => {
    const fetchArticles = async () => {
      const data = await getAllAliments() as { id: number; nom: string; barcode: string }[];
      setArticles(data);
    };
    fetchArticles();
  }, []);



  return (
    <View style={articleStyle.container}>
      <Text style={articleStyle.title}>Liste des articles</Text>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={articleStyle.item}>
            <Text style={articleStyle.nom}>{item.nom}</Text>
            <Text style={articleStyle.barcode}>Code-barres : {item.barcode}</Text>
          </View>
        )}
      />
    </View>
  );
}
