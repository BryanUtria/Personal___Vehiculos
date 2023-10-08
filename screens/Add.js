import React, { useEffect, useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore'

const Add = ({ navigation, route }) => {

    const [rtData, setRTData] = useState('')

    const [nombre, setNombre] = useState('')
    const [placa, setPlaca] = useState('')
    const [kilometros, setKilometros] = useState('')

    async function loadRTData() {
        const suscriber = firestore().collection('Inventario').onSnapshot(querySnapshot => {
            const productos = []
            querySnapshot.forEach(documentSnapshot => {
                productos.push({
                    ...documentSnapshot.data,
                    key: documentSnapshot.id
                })
            })

            setRTData(productos)
        })
        return () => suscriber()
    }

    useEffect(() => {
        loadRTData()
    }, [])

    function subirProducto() {
        try{
            firestore().collection('Inventario').add({
                nombre: nombre,
                placa: placa,
                kilometros: kilometros,
            })
        } catch (e) {
            console.log(e)
        } finally {
            setNombre('')
            setPlaca('')
            setKilometros('')
        }
    }

    function renderRTItem({ item }) {
        return(
            <View style={{ flexDirection: 'row', margin: 10}}>
                <Text>{ item.nombre }</Text>
                <Text>{ item.placa }</Text>
                <Text>{ item.kilometros }</Text>
            </View>
        )
    }

    return (
        <View style = {{ padding: 10 }}>            
            <TextInput 
                placeholder = 'Nombre' 
                value = { nombre }
                onChangeText = { text => setNombre(text) }
                style = { styles.input }
            />
            <TextInput 
                placeholder = 'Placa' 
                value = { placa }
                onChangeText = { text => setPlaca(text) }
                style = { styles.input }
            />
            <TextInput 
                placeholder = 'Kilometros' 
                value = { kilometros }
                onChangeText = { text => setKilometros(text) }
                style = { styles.input }
            />
            <Button 
                title = 'Subir Producto'
                onPress = {() => subirProducto() }
            />
            <FlatList 
                data = { rtData }
                renderItem = { renderRTItem }
                keyExtractor = { item => item.key }
            />
        </View>
    );
}

const styles = StyleSheet.create({

    input: {
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        marginBottom: 12,
        padding: 10,
    }
})

export default Add;