import {StyleSheet } from 'react-native';




export const homeStyle = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'rgba(235, 235, 235, 1)',
    borderWidth: 2,
    padding: 20,
    borderRadius: 10,
    fontSize: 24,
    marginBottom: 25,
    elevation: 2,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 25,
  },
  circleButton: {
    backgroundColor: '#0080ff',
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  icon: {
    fontSize: 32,
    color: 'white',
  },
  historyItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    marginBottom: 6,
  },
  
  historyText: {
    color: 'black',
    fontSize: 16,
  },



  // FERMETURE SCANNER
  closeButtonContainer: {
    position: 'absolute',
    bottom: 150,
    alignSelf: 'center',
  },
  closeButton: {
    backgroundColor: '#ff4444',
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 32,
  },

 
});

