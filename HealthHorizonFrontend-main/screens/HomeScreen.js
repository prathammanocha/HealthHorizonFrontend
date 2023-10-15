import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import React, { Component } from 'react'

import Daily from './components/homeComponents/Daily';
import GoOutsideFrequency from './components/homeComponents/GoOutsideFrequency';

// This is iPhone14-3 in Figma
// components/homeComponents stores the components on this page
export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.home}>
        <View style={styles.personal}>
          <View style={styles.avatar}>
            <Image
              style={styles.avatarImage}
              source={require('../assets/avatarDefault.png')}
            />
          </View>
          <TouchableOpacity style={styles.menu}>
            <Image
              style={styles.menuButton}
              source={require('../assets/menu.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Daily />
          <GoOutsideFrequency />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    // backgroundColor: 'red',
    flexDirection: 'column',
    alignItems: 'center'
  },
  personal: {
    width: '100%',
    height: 160,
    backgroundColor: '#5784E8',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingLeft: 28,
    paddingRight: 34,
    paddingBottom: 10
  },
  avatar: {
    width: 80,
    height: 80,
    // backgroundColor: 'yellow',
    borderRadius: 50
  },
  avatarImage: {
    width: '100%',
    height: '100%'
  },
  menu: {
    width: 46,
    height: 56,
    // backgroundColor: "#bfa",
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuButton: {
    width: '78%',
    height: '78%'
  },
  content: {
    width: '90%',
    // backgroundColor: 'blue',
    marginTop: 24,
    height: 460,
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
})