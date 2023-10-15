import { 
  Text, 
  StyleSheet, 
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import React, { Component } from 'react'

//This is iPhone14-6 on Figma
//Which can open personal detail page by press edit button
export default class ProfileScreen extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.profile}>
        <View style={styles.personalInfo}>
          <View style={styles.personalInfoContent}>
            <View style={styles.avatar}>
              <Image 
                style={styles.avatarImage}
                source={require('../assets/avatarDefault.png')}
              />
            </View>
            <View style={styles.informationBlock}>
              <Text style={{fontSize: 22}}>Username</Text>
              <Text style={{fontSize: 16}}>userEmail@gmail.com</Text>
              <TouchableOpacity 
              style={styles.editButton}
              onPress={() => navigation.navigate('PersonalDetail')}
              >
                <Image 
                  style={styles.editIcon}
                  source={require('../assets/edit.png')}
                />
              </TouchableOpacity>
            </View>
          </View>  
        </View>
        <View style={styles.settings}>
          <View style={styles.settingsContent}>
            <TouchableOpacity style={styles.settingsItem}>
              <Image 
                style={styles.settingsItemIcon}
                source={require('../assets/connect.png')}
              />
              <Text style={{fontSize: 16}}>Device Manage</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsItem}>
              <Image 
                style={styles.settingsItemIcon}
                source={require('../assets/system.png')}
              />
              <Text style={{fontSize: 16}}>System</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsItem}>
              <Image 
                style={styles.settingsItemIcon}
                source={require('../assets/contact.png')}
              />
              <Text style={{fontSize: 16}}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsItem}>
              <Image 
                style={styles.settingsItemIcon}
                source={require('../assets/faq.png')}
              />
              <Text style={{fontSize: 16}}>FAQ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    profile: {
        flex: 1,
        // backgroundColor: 'tomato'
    },
    personalInfo: {
      width: '100%',
      height: '40%',
      backgroundColor: '#5886EC',
      justifyContent: 'center',
      alignItems: 'center'
    },
    personalInfoContent: {
      width: '100%',
      height: '70%',
      // backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    avatar: {
      width: 120,
      height: 120,
      backgroundColor: '#D9D9D9',
      borderRadius: 60
    },
    avatarImage: {
      width: '100%',
      height: '100%'
    },
    informationBlock: {
      width: 180,
      height: 120,
      backgroundColor: '#D9D9D9',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: 12
    },
    editButton: {
      width: 34,
      height: 34,
      borderRadius: 50,
      backgroundColor: '#4F4F4F',
      position: 'absolute',
      right: 10,
      top: 30,
      justifyContent: 'center',
      alignItems: 'center'
    },
    editIcon: {
      width: '70%',
      height: '70%'
    },
    settings: {
      width: '100%',
      height: '60%',
      // backgroundColor: 'yellow',
      justifyContent: 'center',
      alignItems: 'center'
    },
    settingsContent: {
      width: 320,
      height: 320,
      // backgroundColor: 'grey',
      position: 'relative',
      top: '-4%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      // alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    settingsItem: {
      width: 140,
      height: 140,
      backgroundColor: '#D9D9D9',
      marginTop: 14,
      borderRadius: 14,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    settingsItemIcon: {
      width: 70,
      height: 70,
      marginBottom: 4
    }
})