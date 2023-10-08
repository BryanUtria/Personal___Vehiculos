import React from 'react';
import { View, Text} from 'react-native';

const Profile = ({ navigation, route }) => {

    const { nombre } = route.params

    return (
        <View>            
            <Text>Bienvenido { nombre }</Text>
        </View>
    );
}

export default Profile;