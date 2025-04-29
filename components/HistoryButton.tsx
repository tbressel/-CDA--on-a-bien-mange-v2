import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HistoryButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('History' as never)}>
      <Ionicons name="time-outline" size={48} color="black" />
    </TouchableOpacity>
  );
}
