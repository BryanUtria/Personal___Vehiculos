import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Boton = ( props ) => {

    const { onPress, text } = props

    return (
        <TouchableOpacity style = { styles.buttonContainer } onPress={ onPress }>            
            
            <Text style = { styles.buttonText }>
                { text }
            </Text>

        </TouchableOpacity>
    );
};

export default Boton;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: 'blue',
        marginTop: 5,
        marginBottom: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
    },

    buttonText: {
        color: '#f9f9f9'
    },
});