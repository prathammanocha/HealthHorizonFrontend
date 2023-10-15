import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './Main';
import PersonalDetailScreen from './PersonalDetailScreen';

const Stack = createStackNavigator();

export default class Entry extends Component {
    render() {
        return (
            <Stack.Navigator>
                {/* The Main Screen is the outermost interface */}
                {/* Which include 4 pages */}
                <Stack.Screen
                    name="Main"
                    component={MainScreen}
                    options={{ headerShown: false }}
                />
                {/* The other sub pages in the interactive process 
                    are also stored here */}
                <Stack.Screen
                    name="PersonalDetail"
                    component={PersonalDetailScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        )
    }
}

const styles = StyleSheet.create({})