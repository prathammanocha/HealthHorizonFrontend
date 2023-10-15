import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native'
import React, { Component } from 'react'

import SearchBar from './components/doctorsComponents/SearchBar'
import AllDoctors from './components/doctorsComponents/AllDoctors'
import { TextInput } from 'react-native-gesture-handler'

//filter bar for location
LocationBar = ({ visible }) => {
  return (
    <View style={[
      styles.location,
      {
        display: visible ? 'flex' : 'none'
      }
    ]}>
      <TextInput
        style={styles.locationInput}
        placeholder='Enter your location...'
      />
      <View
        style={{
          width: '94%',
          height: 2,
          backgroundColor: 'black',
          marginTop: 8,
          marginBottom: 4
        }}
      />
      {/* put the location choice by needs */}
      <TouchableOpacity style={styles.locationOption}>
        <Text>St Lucia</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.locationOption}>
        <Text>St Lucia</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.locationOption}>
        <Text>St Lucia</Text>
      </TouchableOpacity>
    </View>

  )
}

// filter bar for factors
FilterBar = ({
  visible,
  setFilterVisible,
  setGender,
  currentGender,
  setLanguage,
  currentLanguage
}) => {
  searchByFactor = () => {
    //what happend after press search button

    setFilterVisible();
  }

  return (
    <View style={[
      styles.filter,
      {
        display: visible ? 'flex' : 'none'
      }
    ]}>
      <View style={styles.gender}>
        <Text style={styles.filterFactorName}>
          Gender
        </Text>
        <View style={styles.genderOptions}>
          <TouchableOpacity
            style={styles.genderOption}
            onPress={() => setGender('male')}
          >
            <View style={[
              styles.genderIconBorder,
              currentGender == 'male' ? {
                borderWidth: 2,
                borderColor: '#5886EC',
                borderRadius: 50
              } : ''
            ]}>
              <View style={styles.genderIconBackground}>
                <Image
                  style={styles.genderIcon}
                  source={require('../assets/male.png')}
                />
              </View>
            </View>
            <Text style={[
              styles.genderName,
              {
                color: currentGender == 'male' ? '#5886EC' : 'black'
              }
            ]}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.genderOption}
            onPress={() => setGender('female')}
          >
            <View style={[
              styles.genderIconBorder,
              currentGender == 'female' ? {
                borderWidth: 2,
                borderColor: '#5886EC',
                borderRadius: 50,
              } : ''
            ]}>
              <View style={styles.genderIconBackground}>
                <Image
                  style={styles.genderIcon}
                  source={require('../assets/female.png')}
                />
              </View>
            </View>
            <Text style={[
              styles.genderName,
              {
                color: currentGender == 'female' ? '#5886EC' : 'black'
              }
            ]}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.genderOption}
            onPress={() => setGender('any')}
          >
            <View style={[
              styles.genderIconBorder,
              currentGender == 'any' ? {
                borderWidth: 2,
                borderColor: '#5886EC',
                borderRadius: 50,
              } : ''
            ]}>
              <View style={styles.genderIconBackground}>
                <Image
                  style={[
                    styles.genderIcon,
                    {
                      width: '76%',
                      height: '76%'
                    }
                  ]}
                  source={require('../assets/fine.png')}
                />
              </View>
            </View>
            <Text
              style={[
                styles.genderName,
                {
                  color: currentGender == 'any' ? '#5886EC' : 'black'
                }
              ]}
            >Any</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.language}>
        <Text style={styles.filterFactorName}>
          Language
        </Text>
        <View style={styles.languageOptions}>
          <View style={styles.languageOptionsHalf}>
            <TouchableOpacity
              style={[
                styles.languageOption,
                currentLanguage == 'english' ? {
                  backgroundColor: 'white',
                  borderWidth: 1.4,
                  borderColor: '#5886EC'
                } : ''
              ]}
              onPress={() => setLanguage('english')}
            >
              <Text style={styles.languageOptionText}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.languageOption,
                currentLanguage == 'hindi' ? {
                  backgroundColor: 'white',
                  borderWidth: 1.4,
                  borderColor: '#5886EC'
                } : ''
              ]}
              onPress={() => setLanguage('hindi')}
            >
              <Text style={styles.languageOptionText}>हिन्दी</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.languageOption,
                currentLanguage == 'spanish' ? {
                  backgroundColor: 'white',
                  borderWidth: 1.4,
                  borderColor: '#5886EC'
                } : ''
              ]}
              onPress={() => setLanguage('spanish')}
            >
              <Text style={styles.languageOptionText}>Español</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 2,
              height: '100%',
              backgroundColor: 'black'
            }}
          />
          <View style={styles.languageOptionsHalf}>
            <TouchableOpacity
              style={[
                styles.languageOption,
                currentLanguage == 'chinese' ? {
                  backgroundColor: 'white',
                  borderWidth: 1.4,
                  borderColor: '#5886EC'
                } : ''
              ]}
              onPress={() => setLanguage('chinese')}
            >
              <Text style={styles.languageOptionText}>中文</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.languageOption,
                currentLanguage == 'arab' ? {
                  backgroundColor: 'white',
                  borderWidth: 1.4,
                  borderColor: '#5886EC'
                } : ''
              ]}
              onPress={() => setLanguage('arab')}
            >
              <Text style={styles.languageOptionText}>العربية</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.languageOption,
                currentLanguage == 'others' ? {
                  backgroundColor: 'white',
                  borderWidth: 1.4,
                  borderColor: '#5886EC'
                } : ''
              ]}
              onPress={() => setLanguage('others')}
            >
              <Text style={styles.languageOptionText}>others</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.filterSubmit}>
        <TouchableOpacity
          style={styles.filterSubmitButton}
          onPress={searchByFactor}
        >
          <Text style={{
            fontSize: 20,
            color: 'white',
          }}
          >
            Search
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

// This is iPhone14-5 on Figma
// components/doctorsComponents store the components on this page
export default class DoctorsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLocationBar: false,
      showFilterBar: false,
      currentGender: 'any',
      currentLanguage: 'english'
    }
  }

  setLocationVisible = () => {
    this.setState({
      showLocationBar: !this.state.showLocationBar
    })
  }

  setFilterVisible = () => {
    this.setState({
      showFilterBar: !this.state.showFilterBar
    })
  }

  setGender = (choice) => {
    this.setState({
      currentGender: choice
    })
  }

  setLanguage = (choice) => {
    this.setState({
      currentLanguage: choice
    })
  }

  render() {
    return (
      <View style={styles.doctors}>
        <View style={styles.topPlaceHolder} />
        <ScrollView
          style={{ width: '90%' }}
          showsVerticalScrollIndicator={false}
        >
          <SearchBar
            setLocationVisible={this.setLocationVisible}
            setFilterVisible={this.setFilterVisible}
            filterVisible={this.state.showFilterBar}
          />
          <AllDoctors />
          <LocationBar
            setLocationVisible={this.setLocationVisible}
            visible={this.state.showLocationBar}
          />
          <FilterBar
            setFilterVisible={this.setFilterVisible}
            visible={this.state.showFilterBar}
            setGender={this.setGender}
            currentGender={this.state.currentGender}
            setLanguage={this.setLanguage}
            currentLanguage={this.state.currentLanguage}
          />
        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  doctors: {
    flex: 1,
    // backgroundColor: '#bfa',
    flexDirection: 'column',
    alignItems: 'center'
  },
  topPlaceHolder: {
    width: '100%',
    height: 80,
    backgroundColor: '#5886EC'
  },
  location: {
    width: 200,
    // height: 300,
    backgroundColor: 'white',
    position: 'absolute',
    top: 120,
    left: 0,
    zIndex: 11,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 6,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8
  },
  locationInput: {
    width: '92%',
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center'
  },
  locationOption: {
    width: '100%',
    height: 36,
    // backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  filter: {
    width: 240,
    height: 300,
    backgroundColor: 'white',
    position: 'absolute',
    top: 120,
    right: 0,
    zIndex: 11,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 6,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8
  },
  gender: {
    width: '96%',
    height: 110,
    // backgroundColor: 'green'
  },
  genderOptions: {
    width: '100%',
    height: '70%',
    // backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4
  },
  genderOption: {
    width: 60,
    height: '100%',
    // backgroundColor: 'tomato',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  genderIconBorder: {
    width: 54,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center'
  },
  genderIconBackground: {
    width: 46,
    height: 46,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  genderIcon: {
    width: '90%',
    height: '90%'
  },
  genderName: {
    fontSize: 16
  },
  filterFactorName: {
    fontSize: 18
  },
  language: {
    width: '96%',
    height: 140,
    // backgroundColor: 'orange'
  },
  languageOptions: {
    width: '100%',
    height: '74%',
    // backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6
  },
  languageOptionsHalf: {
    width: '48%',
    height: '100%',
    // backgroundColor: 'green',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  languageOption: {
    width: '98%',
    height: '28%',
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center'
  },
  languageOptionText: {
    fontSize: 16
  },
  filterSubmit: {
    width: '100%',
    height: 40,
    // backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center'
  },
  filterSubmitButton: {
    width: 140,
    height: 30,
    backgroundColor: '#5784E8',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center'
  }
})