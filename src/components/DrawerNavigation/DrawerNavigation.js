import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ScreenName from '../../helpers/ScreenNames';
import HomeScreen from '../../screens/App/HomeScreen/HomeScreen';
import ProfileScreen from '../../screens/App/Profile/ProfileScreen';
import CustomDrawerObject from '../CustomDrawerObject/CustomDrawerObject';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const DrawerNavigation = props => {
  console.log('DrawerNavigation', props.screens);
  const drawerBackgroundColor = props.drawerBackgroundColor;
  const drawerActiveBackgroundColor = props.drawerActiveBackgroundColor;
  const drawerActiveTextColor = props.drawerActiveTextColor;
  const drawerInactiveTextColor = props.drawerInactiveTextColor;

 

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      edgeWidth={'75%'}
      screenOptions={{
        headerShown: false,

        drawerStyle: {
          backgroundColor: drawerBackgroundColor,
          width: '75%',
        },
        drawerActiveTintColor: drawerActiveTextColor,
        drawerInactiveTintColor: drawerInactiveTextColor,
        drawerActiveBackgroundColor: drawerActiveBackgroundColor,
        drawerLabelStyle: {
          fontSize: props.DrawerLableFontsSize,
        },
      }}
      drawerContent={prop => (
        <CustomDrawerObject
          {...prop}
          onPressLogout={props.onLogoutPress}
          headerShown={props.headerShown}
          headerViewOfDrawer={
            props.headerShown ? props.headerViewOfDrawer : null
          }
          isLogout={props.isLogout}
        />
      )}>
      {props.screens.map(category => (
        <Drawer.Screen
          key={category.name}
          name={category.name}
          component={category.component}
          options={{
            swipeEnabled:
              props.DrawerDisableForScreen === undefined
                ? true
                : !props.DrawerDisableForScreen.includes(category.name),
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
