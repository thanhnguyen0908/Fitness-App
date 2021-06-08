import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Activity from '../screens/menu/Activity'
import Profile from '../screens/menu/Profile'
import Diet from '../screens/menu/Diet'
import Explore from '../screens/menu/Explore'
import Stats from '../screens/menu/Stats'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons'


const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const customTabBarStyle = {
    activeBackgroundColor:'#4A7DFC', 
    activeTintColor:'white', 
    inactiveTintColor:'black',
    style:{bottom: 0}
    }

  return(
    <Tab.Navigator
    initialRouteName="Activity"
    tabBarOptions={customTabBarStyle}>
    <Tab.Screen 
    name="Activity"
    component={Activity}
    options={{tabBarLabel: "ACTIVITY", 
    tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="clipboard-text-outline" color={color} size={size} />)}}
    />
    <Tab.Screen 
    name="Diet"
    component={Diet}
    options={{tabBarLabel: "DIET",
    tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="food-apple" color={color} size={size} />)}}
    />
    <Tab.Screen 
    name="Explore"
    component={Explore}
    options={{tabBarLabel: "EXPLORE",
    tabBarIcon: ({ color, size }) => (<Icon name="explore" color={color} size={size} />)}}
    />
    <Tab.Screen 
    name="Stats"
    component={Stats}
    options={{tabBarLabel: "STATS",
    tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="chart-bar" color={color} size={size} />)}}
    />
    <Tab.Screen 
    name="Profile"
    component={Profile}
    options={{tabBarLabel: "PROFILE",
    tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account" color={color} size={size} />)}}
    />
    </Tab.Navigator>
  )
}
export default BottomNavigation

