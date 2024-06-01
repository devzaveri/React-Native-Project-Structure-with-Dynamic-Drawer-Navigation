import {View, Text, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';
import DrawerNavigation from '../components/DrawerNavigation/DrawerNavigation';
import HomeScreen from '../screens/App/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/App/Profile/ProfileScreen';
import NotificationScreen from '../screens/App/Notification/NotificationScreen';
import Images from '../helpers/Images';

import DrawerHeader from '../components/DrawerHeader/DrawerHeader';
import {createStackNavigator} from '@react-navigation/stack';
import MySecondScreen from '../screens/App/MySecondScreen/MySecondScreen';
import { ColorProperties } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import { Colors } from '../helpers';
const Stack = createStackNavigator();
const AppStack = () => {

  const HomeStackNavigator = () => (
    <Stack.Navigator >
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="MySecondScreen" component={MySecondScreen} options={{headerShown: false}} />
      {/* Add More Screens */}
    </Stack.Navigator>
  );

  const ProfileStackNavigator = () => (
    <Stack.Navigator >
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown: false}} />
      {/* Add More Screens */}
    </Stack.Navigator>
  );

  const NotificationStackNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{headerShown: false}} />
      {/* Add More Screens */}
    </Stack.Navigator>
  );

  const categories = [
    {name: 'Home', component: HomeStackNavigator, key: 'HomeDrawer'},
    {name: 'Profile', component: ProfileStackNavigator, key: 'ProfileDrawer'},
    {
      name: 'Notification',
      component: NotificationStackNavigator,
      key: 'NotificationDrawer',
    },
    // Add more categories as needed
  ];

  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={{flex: 1}}>
      <DrawerNavigation
        // Required Fields = headerShown={true/false} , screens
        // If headershown={true} then headerViewOfDrawer={} is required field

        headerShown={true}
        headerViewOfDrawer={DrawerHeader}
        screens={categories}
        // screens={StackNavigator}
        // Optional Fields

        drawerBackgroundColor={Colors.pink}
        drawerActiveBackgroundColor={Colors.red}
        drawerActiveTextColor={Colors.white}
        drawerInactiveTextColor={Colors.black}
        onLogoutPress={() => {
          console.log('LOGOUT');
        }}
        isLogout
        // DrawerDisableForScreen={['Profile', 'Notification']}
        DrawerLableFontsSize={18}
      />
    </View>
  );
};

export default AppStack;
