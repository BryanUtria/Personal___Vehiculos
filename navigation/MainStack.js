import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Card_Detail from '../screens/Card_Detail';
import Add from '../screens/Add';

const Stack = createNativeStackNavigator()

const MainStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = 'Home' component={ Home }/>
                <Stack.Screen name = 'Profile' component={ Profile }/>
                <Stack.Screen name = 'Detail' component={ Card_Detail }/>
                <Stack.Screen name = 'Add' component={ Add }/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStack;