import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class Daily extends Component {
    render() {
        return (
            <View style={styles.frame}>
                <View style={[
                    styles.content,
                    {
                        flexDirection: 'column',
                        justifyContent: 'space-evenly'
                    }
                ]}>
                    <Text style={{ fontSize: 16 }}>You have been consistent for</Text>
                    <Text style={{ color: '#2CDC00', fontSize: 16 }}>13 Days</Text>
                </View>
                <View style={[
                    styles.content,
                    {
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }
                ]}>
                    <Text style={{ fontSize: 16 }}>Have you had a walk today?</Text>
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.walkConfirm}
                        >
                            <Text style={{ color: 'white', fontSize: 16 }}>Yessss!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    frame: {
        width: '100%',
        height: '36%',
        // backgroundColor: 'green',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    content: {
        width: '100%',
        height: '46%',
        backgroundColor: '#F5F7FA',
        borderRadius: 14,
        padding: 14
    },
    button: {
        flexDirection: 'row-reverse'
    },
    walkConfirm: {
        width: 100,
        height: 32,
        backgroundColor: '#5784E8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
    }
})