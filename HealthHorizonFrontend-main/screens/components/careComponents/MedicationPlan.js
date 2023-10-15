import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Image
} from 'react-native'
import React, { Component } from 'react'

export default class MedicationPlan extends Component {
    render() {
        return (
            <View style={styles.frame}>
                <Text style={styles.topic}>Medication Plan</Text>
                <TouchableOpacity
                    style={styles.create}
                >
                    <Image
                        style={styles.createIcon}
                        source={require('../../../assets/create.png')}
                    />
                </TouchableOpacity>
                <View style={styles.plan}>
                    <Text style={styles.medicineName}>
                        The Medicine Name
                    </Text>
                    <Text style={styles.contentText}>
                        Cycle: 3 time a day
                    </Text>
                    <Text style={styles.contentText}>
                        Scheduled at: 8/10/2023
                    </Text>
                    <Text style={styles.contentText}>
                        Already Taken Today? Yes!
                    </Text>
                    <Text style={[
                        styles.status,
                        {
                            color: 'red'
                        }
                    ]}>
                        Expired
                    </Text>
                </View>
                <View style={styles.plan}>
                    <Text style={styles.medicineName}>
                        The Medicine Name
                    </Text>
                    <Text style={styles.contentText}>
                        Cycle: 3 time a day
                    </Text>
                    <Text style={styles.contentText}>
                        Scheduled at: 8/10/2023
                    </Text>
                    <Text style={styles.contentText}>
                        Already Taken Today? Yes!
                    </Text>
                    <Text style={[
                        styles.status,
                        {
                            color: '#2CDC00'
                        }
                    ]}>
                        Active
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    frame: {
        width: '100%',
        // height: 840,
        marginTop: 14,
        // backgroundColor: 'red',
        flexDirection: 'column',
    },
    topic: {
        fontSize: 22
    },
    create: {
        width: '100%',
        height: 90,
        backgroundColor: '#849CB7',
        borderRadius: 12,
        marginTop: 8,
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    createIcon: {
        width: 60,
        height: 60
    },
    plan: {
        width: '100%',
        height: 134,
        backgroundColor: '#F5F7FA',
        // backgroundColor: 'red',
        borderRadius: 12,
        marginTop: 8,
        marginBottom: 8,
        // flexDirection: 'row',
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 8,
        // paddingBottom: 8,
        flexDirection: 'column'
    },
    medicineName: {
        width: '100%',
        height: 36,
        fontSize: 18,
        lineHeight: 36,
        // backgroundColor: 'green',
    },
    contentText: {
        fontSize: 16,
        height: 27.2,
        lineHeight: 21,
        // backgroundColor: 'blue',
        flexDirection: 'column',
        // textAlign: 'justify'
    },
    status: {
        fontSize: 20,
        
        position: 'absolute',
        right: 20,
        top: 4
    }
})