import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native'
import React, { Component } from 'react'



export default class SearchBar extends Component {
    render() {
        const {
            setLocationVisible,
            setFilterVisible,
            filterVisible
        } = this.props;
        return (
            <View style={styles.search}>
                <TextInput
                    style={styles.searchInput}
                    placeholder='Search the doctors by name/location...'
                    placeholderTextColor={'#646465'}
                />
                <Image 
                    style={styles.searchIcon}
                    source={require('../../../assets/search.png')}
                />
                <View style={styles.filter}>
                    <TouchableOpacity
                        style={styles.filterFactor}
                        onPress={setLocationVisible}
                        name="openLocationBar"
                    >
                        <Text style={styles.filterFactorText}>Location</Text>
                        <Image
                            style={{ width: 26, height: 26, marginLeft: 8 }}
                            source={require('../../../assets/paperPlane.png')}
                        />
                    </TouchableOpacity>
                    <View
                        style={{
                            width: 2,
                            height: '100%',
                            backgroundColor: '#000000'
                        }}
                    />
                    <TouchableOpacity
                        style={styles.filterFactor}
                        onPress={setFilterVisible}
                    >
                        <Text style={styles.filterFactorText}>Filter</Text>
                        <Image
                            style={[
                                {
                                    width: 34,
                                    height: 34,
                                    marginLeft: 14,
                                },
                                filterVisible ?
                                    {
                                        transform: [{ rotate: '180deg' }]
                                    } : ''
                            ]
                            }
                            source={require('../../../assets/filterExplode.png')}
                        />
                    </TouchableOpacity>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    search: {
        width: '100%',
        height: 128,
        // backgroundColor: 'red',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    searchInput: {
        width: '100%',
        height: '38%',
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#646465',
        borderRadius: 8,
        paddingLeft: 10,
        fontSize: 16
    },
    searchIcon: {
        width: 26,
        height: 26,
        position: 'absolute',
        right: 8,
        top: 20
    },
    filter: {
        width: "100%",
        height: '42%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'yellow'
    },
    filterFactor: {
        width: '44%',
        height: '92%',
        backgroundColor: '#D9D9D9',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    filterFactorText: {
        fontSize: 16
    },

})