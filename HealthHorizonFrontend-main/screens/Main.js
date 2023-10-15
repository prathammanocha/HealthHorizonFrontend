import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import CareScreen from './CareScreen';
import DoctorsScreen from './DoctorsScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        let iconSource;

        if (route.name === 'Home') {
          iconSource = isFocused
            ? require('../assets/homeIconOnFocus.png')
            : require('../assets/homeIcon.png');
        } else if (route.name === 'Care') {
          iconSource = isFocused
            ? require('../assets/careIconOnFocus.png')
            : require('../assets/careIcon.png');
        } else if (route.name === 'Doctors') {
          iconSource = isFocused
            ? require('../assets/messageIconOnFocus.png')
            : require('../assets/messageIcon.png');
        } else if (route.name === 'Setting') {
          iconSource = isFocused
            ? require('../assets/settingIconOnFocus.png')
            : require('../assets/settingIcon.png');
        }

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={styles.tabBarItem}
          >
            <Image source={iconSource} style={styles.tabBarIcon} />
            <Text
              style={[
                styles.tabBarLabel,
                isFocused && { color: '#5784E8' },
              ]}
            >
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default function Main() {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Care" component={CareScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Doctors" component={DoctorsScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Setting" component={ProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    height: 80, // 自定义底部导航栏的高度
    backgroundColor: 'white', // 底部导航栏的背景颜色
    borderTopWidth: 1, // 添加底部边框线
    borderTopColor: '#ccc', // 底部边框线的颜色
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarIcon: {
    width: 28,
    height: 28,
  },
  tabBarLabel: {
    fontSize: 13.8,
    marginTop: 6, // 调整文本与图标的间距
  },
});
