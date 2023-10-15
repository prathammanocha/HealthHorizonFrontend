import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'

import Notifications from './components/careComponents/Notifications'
import MedicationPlan from './components/careComponents/MedicationPlan'

// This is iPhone14-4 in Figma
// components/careComponents stores the components on this page
export default class CareScreen extends Component {
  render() {
    return (
      <View style={styles.care}>
        <View style={styles.topPlaceHolder} />
        <ScrollView 
        style={{ width: '90%' }}
        showsVerticalScrollIndicator={false}
        >
          <Notifications />
          <MedicationPlan />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  care: {
    flex: 1,
    // backgroundColor: 'yellow',
    flexDirection: 'column',
    alignItems: 'center'
  },
  topPlaceHolder: {
    width: '100%',
    height: 80,
    backgroundColor: '#5886EC'
  }
})