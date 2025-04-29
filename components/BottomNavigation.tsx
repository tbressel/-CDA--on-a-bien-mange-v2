import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeButton from './HomeButton';
import HistoryButton from './HistoryButton';
import ArticleButton from './ArticleButton';

export default function BottomNavigation() {
  return (
    <View style={styles.container}>
      <HomeButton />
      <HistoryButton />
      <ArticleButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 30,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#ffffffc0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
