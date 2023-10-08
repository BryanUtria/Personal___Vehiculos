import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import Boton from '../components/Boton';
import Card from '../components/Card';
import FloatingButton from '../components/FloatingButton';

const Home = ({ navigation }) => {

    return (
        <View style = { styles.container }>
            <Card title="Hola" content="Hola Mundo, mi primer proyecto"
                onPress = {() => {
                    navigation.navigate('Detail', { nombre: 'Brayan' })
                }}>
            </Card>
            <FloatingButton
                onPress = {() => {
                    navigation.navigate('Add', { nombre: 'Brayan' })
                }}>
            </FloatingButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingHorizontal: 16,
      //justifyContent: 'center',
    },
});

export default Home;