import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ArticleButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Articles' as never)}>
      <Ionicons name="list-outline" size={48} color="black" />
    </TouchableOpacity>
  );
}
