
// react imports
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getHistory } from '../database/database';
import { historyStyle } from '../styles/HistoryStyle';

interface HistoryItem {
    type: 'name' | 'barcode';
    query: string;
  }


export default function HistoryScreen() {
    const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const results = await getHistory();
      setHistory(results as HistoryItem[]);
    };
    fetchHistory();
  }, []);

  return (
    <View style={historyStyle.container}>
      <Text style={historyStyle.title}>Historique des recherches</Text>
      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={historyStyle.item}>
            {item.type === 'name' ? `🔤 ${item.query}` : `📦 ${item.query}`}
          </Text>
        )}
      />
    </View>
  );
}

