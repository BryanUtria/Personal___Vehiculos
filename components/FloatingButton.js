import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FloatingButton = ( props ) => {

  const { onPress } = props

  return (
      <TouchableOpacity style={styles.floatingButton} onPress={ onPress }>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007AFF',
    borderRadius: 40,
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 40,
  },
});

export default FloatingButton;