import styled from 'styled-components/native';
import {Platform, StyleSheet} from 'react-native';
import {rh, rs, rw} from 'react-native-full-responsive';
import {Colors} from '../../../helpers';
// import {Colors} from '../../../helpers/Colors';

export const MainViewContainer = styled.View`
  flex: 1;
`;

export const MainHeaderView = styled.View`
  padding: ${rh(2)}px;
  flex-direction: row;
`;

export const OpenDrawerBtn = styled.TouchableOpacity``;

export const OpenDrawerImg = styled.Image`
  height: ${rh(5)}px;
  width: ${rw(8)}px;
`;

export const RightView = styled.TouchableOpacity`
  height: ${rh(5)}px;
  width: ${rw(100)}px;

  padding-right: ${rw(20)}px;
  justify-content: center;
  align-items: center;
`;

export const RightImg = styled.Image`
  height: ${rh(10)}px;
  width: ${rw(12)}px;
`;
export const MainViewComponent = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;
export const MainText = styled.Text`
`
export const NavigateScreenBtn = styled.TouchableOpacity`
padding-top: ${rh(1)}px;
padding-bottom: ${rh(1)}px;
padding-left: ${rw(2)}px;
padding-right: ${rw(2)}px;
background: ${Colors.buttonClr};
border-radius: ${rw(50)}px;
margin-top: ${rh(2)}px;
`;
export const NavigateScreenText = styled.Text``;