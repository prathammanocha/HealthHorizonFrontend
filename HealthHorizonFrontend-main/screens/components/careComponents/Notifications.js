import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity
} from 'react-native'
import React, { Component } from 'react'

export default class Notifications extends Component {
    render() {
        return (
            <View style={styles.frame}>
                <Text style={styles.topic}>Notification</Text>
                <View style={styles.notification}>
                    <View style={styles.notificationIcon}>
                        <Image
                            style={styles.notificationIconImage}
                            source={require('../../../assets/bell.png')}
                        />
                    </View>
                    <View style={styles.notificationContent}>
                        <Text
                            style={styles.contentTopic}
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            This is topic
                        </Text>
                        <Text
                            style={styles.contentRough}
                            numberOfLines={2}
                            ellipsizeMode="tail"
                        >
                            Show some rough content, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, elit in tincidunt posuere, dolor sapien cursus ex, vel facilisis purus arcu sit amet purus.
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={styles.viewDetail}
                    >
                        <Image
                            style={styles.viewDetailIcon}
                            source={require('../../../assets/arrowBlue.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.notification}>
                    <View style={styles.notificationIcon}>
                        <Image
                            style={styles.notificationIconImage}
                            source={require('../../../assets/bell.png')}
                        />
                    </View>
                    <View style={styles.notificationContent}>
                        <Text
                            style={styles.contentTopic}
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            This is topic
                        </Text>
                        <Text
                            style={styles.contentRough}
                            numberOfLines={2}
                            ellipsizeMode="tail"
                        >
                            Show some rough content, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, elit in tincidunt posuere, dolor sapien cursus ex, vel facilisis purus arcu sit amet purus.
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={styles.viewDetail}
                    >
                        <Image
                            style={styles.viewDetailIcon}
                            source={require('../../../assets/arrowBlue.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    frame: {
        width: '100%',
        // height: 240,
        marginTop: 14,
        // backgroundColor: 'red',
        flexDirection: 'column',
    },
    topic: {
        fontSize: 22
    },
    notification: {
        width: '100%',
        height: 90,
        backgroundColor: '#F5F7FA',
        borderRadius: 12,
        marginTop: 8,
        marginBottom: 8,
        flexDirection: 'row'
    },
    notificationIcon: {
        width: 82,
        height: '100%',
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    notificationIconImage: {
        width: 50,
        height: 50
    },
    notificationContent: {
        width: '54%',
        height: '100%',
        // backgroundColor: 'tomato',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    contentTopic: {
        fontSize: 20
    },
    contentRough: {
        // fontSize: 14
    },
    viewDetail: {
        width: 68,
        height: '100%',
        // backgroundColor: 'green',
        position: 'absolute',
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewDetailIcon: {
        width: 36,
        height: 36
    }
})