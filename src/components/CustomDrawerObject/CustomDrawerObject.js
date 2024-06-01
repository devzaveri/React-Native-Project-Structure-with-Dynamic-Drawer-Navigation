import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {rh, rs, rw} from 'react-native-full-responsive';
import {
  MainComponentView,
  InnerComponentView,
  ScreenNameView,
  SignOutView,
  SignoutButton,
  SignoutText,
} from './CustomDrawerObjectStyles';


const CustomDrawerObject = props => {
  console.log('CustomDrawerObject', props.isLogout);
  const windowHeight = Dimensions.get('window').height;

  return (
    <MainComponentView>
      <InnerComponentView>
        <DrawerContentScrollView
          style={{backgroundColor: 'transparent'}}
          {...props}>
          {props.headerShown ? <props.headerViewOfDrawer /> : null}

          <ScreenNameView>
            <DrawerItemList {...props} />
          </ScreenNameView>
        </DrawerContentScrollView>
      </InnerComponentView>
      {props.isLogout ? (
        <SignOutView windowHeight={windowHeight}>
          <SignoutButton
            onPress={() => {
              props.onPressLogout(); // Call the onPressLogout function here
            }}>
            <SignoutText>Sign out</SignoutText>
          </SignoutButton>
        </SignOutView>
      ) : null}
    </MainComponentView>
  );
};

export default CustomDrawerObject;
