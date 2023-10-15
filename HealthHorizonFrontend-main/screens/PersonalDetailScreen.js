import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native'
import React, { Component } from 'react'

const options = {
  title: 'Select Image',
  storageOptions: {
      skipBackup: true,
      path: 'images',
  },
  mediaType: 'photo',
  cancelButtonTitle: 'canchhel',
  chooseFromLibraryButtonTitle: 'choose from galary'
};

//The detail information of the user
//User can also edit information on this page
export default class PersonalDetailScreen extends Component {
  constructor(props) {
      super(props);

      this.state = {
          editing: false,
          fullNameValue: 'User Name',
          emailValue: 'userEmail@gmail.com',
          phoneNumberValue: '123654789',
          homeAddressValue: '88 lorem street',
          avatarSource: null
      }

      this._openEdit = this._openEdit.bind(this);
      this._saveChange = this._saveChange.bind(this);
  }

  // enter editing mode
  _openEdit() {
      this.setState({
          editing: true
      })
  }

  // save the change
  _saveChange() {
      this.setState({
          editing: false
      })
  }

  changeName(text) {
      this.setState({
          fullNameValue: text
      })
  }

  changeEmail(text) {
      this.setState({
          emailValue: text
      })
  }

  changePN(text) {
      this.setState({
          phoneNumberValue: text
      })
  }

  changeAddress(text) {
      this.setState({
          homeAddressValue: text
      })
  }

  render() {
      const { navigation } = this.props;

      return (
          <View style={styles.frame}>
              <View style={styles.topBar}>
                  <TouchableOpacity
                      onPress={navigation.goBack}
                  >
                      <Image
                          style={styles.controllorArrow}
                          source={require('../assets/arrowBlack.png')}
                      />
                  </TouchableOpacity>
                  <Text style={styles.title}>
                      {
                          this.state.editing ?
                              'Editing Profile' :
                              'Profile'
                      }
                  </Text>
                  {
                      this.state.editing ?
                          <TouchableOpacity
                              onPress={this._saveChange}
                          >
                              <Text style={styles.save}>Save</Text>
                          </TouchableOpacity> :
                          <TouchableOpacity
                              onPress={this._openEdit}
                          >
                              <Image
                                  style={styles.editIcon}
                                  source={require('../assets/editBlack.png')}
                              />
                          </TouchableOpacity>
                  }


              </View>
              <View style={styles.avatarEditor}>
                  <Image
                      style={styles.avatarShower}
                      source={require('../assets/avatarDefault.png')}
                  />
                  {
                      this.state.editing ?
                          <TouchableOpacity
                              style={styles.editButton}
                              onPress={this.changeAvatar}
                          >
                              <Text style={styles.buttonText}>
                                  Edit photo
                              </Text>
                          </TouchableOpacity> :
                          null
                  }

              </View>
              <View style={styles.information}>
                  <View style={styles.section}>
                      <Text style={styles.sectionTitle}>
                          Full Name
                      </Text>
                      <TextInput
                          style={styles.sectionInfo}
                          value={this.state.fullNameValue}
                          autoCapitalize='words'
                          onChangeText={(text) => this.changeName(text)}
                          editable={this.state.editing}
                          autoFocus
                          inputMode='text'
                      />
                  </View>
                  <View style={styles.section}>
                      <Text style={styles.sectionTitle}>
                          Email
                      </Text>
                      <TextInput
                          style={styles.sectionInfo}
                          value={this.state.emailValue}
                          onChangeText={(text) => this.changeEmail(text)}
                          editable={this.state.editing}
                          inputMode='email'
                      />
                  </View>
                  <View style={styles.section}>
                      <Text style={styles.sectionTitle}>
                          Phone Number
                      </Text>
                      <TextInput
                          style={styles.sectionInfo}
                          value={this.state.phoneNumberValue}
                          onChangeText={(text) => this.changePN(text)}
                          editable={this.state.editing}
                          inputMode='tel'
                      />
                  </View>
                  <View style={styles.section}>
                      <Text style={styles.sectionTitle}>
                          Home Address
                      </Text>
                      <TextInput
                          style={styles.sectionInfo}
                          value={this.state.homeAddressValue}
                          onChangeText={(text) => this.changeAddress(text)}
                          editable={this.state.editing}
                          inputMode='text'
                      />
                  </View>
              </View>
          </View>
      )
  }
}

const styles = StyleSheet.create({
  frame: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      // backgroundColor: 'tomato'
  },
  topBar: {
      width: '100%',
      height: 120,
      // backgroundColor: 'yellow',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 20,
      paddingRight: 20
  },
  controllorArrow: {
      width: 30,
      height: 30,
  },
  title: {
      fontSize: 18.6,
      color: '#272755'
  },
  editIcon: {
      width: 32,
      height: 32
  },
  save: {
      color: 'blue',
      fontSize: 18
  },
  avatarEditor: {
      width: '100%',
      height: 150,
      // backgroundColor: 'white',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center'
  },
  avatarShower: {
      width: 100,
      height: 100
  },
  editButton: {
      position: 'relative',
      top: -10,
  },
  buttonText: {
      color: 'blue',
      marginTop: 8,
      fontSize: 16
  },
  information: {
      width: '92%',
      height: '54%',
      // backgroundColor: 'orange',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  section: {
      width: '94%',
      height: '18%',
      // backgroundColor: 'white',
      flexDirection: 'column'
  },
  sectionTitle: {
      width: '100%',
      height: 30,
      // backgroundColor: 'grey',
      lineHeight: 30,
      color: '#9393AA',
      fontSize: 16
  },
  sectionInfo: {
      borderBottomWidth: 2,
      borderBottomColor: '#F0F0F0',
      height: 46,
      width: '100%',
      color: '#272755',
      fontSize: 18
  }
})