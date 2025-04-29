import React, { useEffect, useState, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { addToHistory, initDatabase, seedDatabase, searchByName, searchByBarcode } from '../database/database';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { clearHistory } from '../database/database';
import { homeStyle } from '../styles/HomeStyle';
import { getHistory } from '../database/database'; 


export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const [text, setText] = useState('');
  const [hasPermission, requestPermission] = useCameraPermissions();
  const [scanning, setScanning] = useState(false);
  const hasScanned = useRef(false);
  const [history, setHistory] = useState<{ type: string, value: string, barcode: string }[]>([]);



  useEffect(() => {
    initDatabase();
    seedDatabase();
    loadHistory();
  }, []);


  const loadHistory = async () => {
    const allHistory: { type: string; query: string, barcode: string }[] = await getHistory();
    const lastFive = allHistory.slice(0, 5).map(item => ({ type: item.type, value: item.query, barcode: item.barcode })); 
    setHistory(lastFive);
  };
  

  const handleSearch = async () => {
    const result = await searchByName(text);
    addToHistory('name', text);
    result.length > 0
      ? navigation.navigate('Result', { data: result[0] })
      : alert('Aucun résultat trouvé.');
  };

  const handleBarCodeScanned = async ({ data }: { data: string }) => {
    if (hasScanned.current) return;
    hasScanned.current = true;
    setScanning(false);
    const result = await searchByBarcode(data);
    addToHistory('barcode', data);
    result.length > 0
      ? navigation.navigate('Result', { data: result[0] })
      : alert('Aucun résultat pour ce code-barres.');
  };

  const startScanning = async () => {
    const permission = await requestPermission();
    if (permission?.granted) {
      hasScanned.current = false;
      setScanning(true);
    } else {
      alert('Permission caméra refusée.');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/backscreen.png')}
      style={homeStyle.background}
      resizeMode="cover">

      <View style={homeStyle.overlay}>
        <View style={homeStyle.content}>
          <TextInput
            style={homeStyle.input}
            placeholder="Entrer un aliment"
            placeholderTextColor="#999"
            value={text}
            onChangeText={setText}
          />

          {/* BOUTONS EN CERCLE */}
          <View style={homeStyle.buttonRow}>
            <TouchableOpacity style={homeStyle.circleButton} onPress={async () => {
              await clearHistory();
              alert('Historique vidé');
            }}>
              <Text style={homeStyle.icon}>🗑️</Text>
            </TouchableOpacity>

            <TouchableOpacity style={homeStyle.circleButton} onPress={handleSearch}>
              <Text style={homeStyle.icon}>🔍</Text>
            </TouchableOpacity>

            <TouchableOpacity style={homeStyle.circleButton} onPress={startScanning}>
              <Text style={homeStyle.icon}>📷</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 20 }}>
  {history.map((item, index) => (
       <TouchableOpacity
          key={index}
          style={homeStyle.historyItem}
          onPress={async () => {
            const result = item.type === 'name'
              ? await searchByName(item.value)
              : await searchByBarcode(item.value);

    
            result.length > 0
              ? navigation.navigate('Result', { data: result[0] })
              : alert("Aucun résultat trouvé.");
          }}>
          <Text style={homeStyle.historyText}>
            {item.type === 'name' 
              ? `🔍 ${item.value}` 
              : `📷 ${item.value}`}
          </Text>
        </TouchableOpacity>
  ))}
</View>



          {/* VUE DE SCAN */}
          {scanning && hasPermission?.granted && (
            <View style={StyleSheet.absoluteFill}>
              <CameraView
                onBarcodeScanned={handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
                barcodeScannerSettings={{ barcodeTypes: ['ean13', 'ean8', 'qr'] }}
              />
              <View style={homeStyle.closeButtonContainer}>
                <TouchableOpacity onPress={() => setScanning(false)} style={homeStyle.closeButton}>
                  <Text style={homeStyle.closeButtonText}>✖</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
    </ImageBackground>
  );

}