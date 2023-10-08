import React from 'react';
import { View, Text} from 'react-native';

const Card_Detail = ({ navigation, route }) => {

    const { nombre } = route.params

    return (
        <View>            
            <Text>Bienvenido { nombre }</Text>
        </View>
    );
}

export default Card_Detail;