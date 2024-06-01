import {View, Text, Dimensions, Image} from 'react-native';
import React from 'react';
import {Images} from '../../helpers';
import {rh, rs, rw} from 'react-native-full-responsive';
import {MainComponentView , HeaderImg , LogoText} from './DrawerHeaderStyles';

const DrawerHeader = () => {
  const windowHeight = Dimensions.get('window').height;
  return (
    <MainComponentView
    windowHeight={windowHeight}>
      <HeaderImg
        source={Images.logo}
        
        resizeMode="contain"
      />
      <LogoText >Your App Name</LogoText>
    </MainComponentView>
  );
};

export default DrawerHeader;
