import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import ArticleScreen from '../screen/ArticleScreen';

const Stack = createStackNavigator()

export default AppNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Article" component={ArticleScreen}  />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

