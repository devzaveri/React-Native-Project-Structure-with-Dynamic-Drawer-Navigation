import {View, Text} from 'react-native';
import React from 'react';
import AppStack from './AppStack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/App/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/App/Profile/ProfileScreen';
import DrawerNavigation from '../components/DrawerNavigation/DrawerNavigation';
const RoutesIndex = () => {
  console.log('Route called');
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default RoutesIndex;
