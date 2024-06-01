import {
  MainViewContainer,
  OpenDrawerBtn,
  OpenDrawerText,
  MainHeaderView,
  RightView,
  RightText,
  OpenDrawerImg,
  RightImg,
  MainViewComponent,
  MainText,
  NavigateScreenBtn,
  NavigateScreenText
} from './HomeScreenStyles';

import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MySecondScreen from '../MySecondScreen/MySecondScreen';
import ScreenName from '../../../helpers/ScreenNames';
import { useAlert } from '../../../components/ThemeAlert/AlertService';
import ThemeAlert from '../../../components/ThemeAlert/ThemeAlert';
import { Images } from '../../../helpers';


const HomeScreen = ({navigation}) => {
  console.log('Home Called');
  const { showAlert, hideAlert, alertVisible, alertTitle, alertMessage } = useAlert();

  function HeaderFunction() {
    return (
      <MainHeaderView>
        
        <OpenDrawerBtn
          style={{}}
          onPress={() => {
            
            navigation.openDrawer();
          }}
          
          >
          <OpenDrawerImg resizeMode='contain' source={Images.openDrawer} />
        </OpenDrawerBtn>
        <RightView
       
        >
          <RightImg resizeMode='contain' source={Images.logo} />
        </RightView>
      </MainHeaderView>
    );
  }

  function MainViewFunc(){
    return(
      <MainViewComponent>
        <MainText>Main View Area</MainText>
        <NavigateScreenBtn onPress={()=> {
          navigation.navigate(ScreenName.app.MySecondScreen)
        }}>
          <NavigateScreenText>Change Screen</NavigateScreenText>
        </NavigateScreenBtn>
      </MainViewComponent>
    )
  }

  return (
    <MainViewContainer>
    {HeaderFunction()}
    <ThemeAlert visible={alertVisible} title={alertTitle} message={alertMessage} onClose={hideAlert} />
    {MainViewFunc()}
  </MainViewContainer>
  );
};

export default HomeScreen;
