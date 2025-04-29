import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import HistoryScreen from './screens/HistoryScreen';
import ArticleScreen from './screens/ArticleScreen';
import ResultScreen from './screens/ResultScreen';
import BottomNavigation from './components/BottomNavigation';
import { View, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="History" component={HistoryScreen} />
          <Stack.Screen name="Articles" component={ArticleScreen} />
          <Stack.Screen name="Result" component={ResultScreen} />
        </Stack.Navigator>
        <BottomNavigation />
      </View>
    </NavigationContainer>
  );
}
