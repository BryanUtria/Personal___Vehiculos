import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Card = ( props ) => {

  const { onPress, title, content } = props

  return (
      <TouchableOpacity style={styles.card} onPress={ onPress }>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{content}</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: screenWidth-20,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
  },
});

export default Card;