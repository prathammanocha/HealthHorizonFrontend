import { 
    Text, 
    StyleSheet, 
    View,
    Image,
    TouchableOpacity
} from 'react-native'
import React, { Component } from 'react'

export default class AllDoctors extends Component {
  render() {
    return (
      <View style={styles.frame}>
        {/* assume the situation with multiple doctors */}
        <TouchableOpacity style={styles.doctorInfo}>
            <View style={styles.infoLeft}>
                <Image 
                    style={styles.doctorAvatar}
                    source={require('../../../assets/doctorAvatar.png')}
                />
            </View>
            <View style={styles.infoRight}>

            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.doctorInfo}>
            <View style={styles.infoLeft}>
                <Image 
                    style={styles.doctorAvatar}
                    source={require('../../../assets/doctorAvatar.png')}
                />
            </View>
            <View style={styles.infoRight}>

            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.doctorInfo}>
            <View style={styles.infoLeft}>
                <Image 
                    style={styles.doctorAvatar}
                    source={require('../../../assets/doctorAvatar.png')}
                />
            </View>
            <View style={styles.infoRight}>

            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.doctorInfo}>
            <View style={styles.infoLeft}>
                <Image 
                    style={styles.doctorAvatar}
                    source={require('../../../assets/doctorAvatar.png')}
                />
            </View>
            <View style={styles.infoRight}>

            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.doctorInfo}>
            <View style={styles.infoLeft}>
                <Image 
                    style={styles.doctorAvatar}
                    source={require('../../../assets/doctorAvatar.png')}
                />
            </View>
            <View style={styles.infoRight}>

            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.doctorInfo}>
            <View style={styles.infoLeft}>
                <Image 
                    style={styles.doctorAvatar}
                    source={require('../../../assets/doctorAvatar.png')}
                />
            </View>
            <View style={styles.infoRight}>

            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.doctorInfo}>
            <View style={styles.infoLeft}>
                <Image 
                    style={styles.doctorAvatar}
                    source={require('../../../assets/doctorAvatar.png')}
                />
            </View>
            <View style={styles.infoRight}>

            </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        // height: 5000,
        // backgroundColor: 'tomato',
        marginTop: 16
    },
    doctorInfo: {
        width: '100%',
        height: 104,
        backgroundColor: '#EFF1F4',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderWidth: 1.4,
        borderColor: 'black'
    },
    infoLeft: {
        width: '30%',
        height: '100%',
        // backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center'
    },
    doctorAvatar: {
        width: 76,
        height: 76,
        backgroundColor: 'white',
        borderRadius: 50
    },
    infoRight: {
        width: '68%',
        height: '100%',
        // backgroundColor: 'blue'
    }
})