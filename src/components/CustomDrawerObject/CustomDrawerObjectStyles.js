import styled from 'styled-components/native';
import {Platform, StyleSheet} from 'react-native';
import {rh, rs, rw} from 'react-native-full-responsive';
import {Colors} from '../../helpers';

export const MainComponentView = styled.View`
  flex: 1;
`;

export const InnerComponentView = styled.View`
  flex: 1;
`;
export const ScreenNameView = styled.View`
  justify-content: center;
`;

export const SignOutView = styled.View`
  position: absolute;
  bottom: ${rh(6)}px;
  flex: 1;
  width: ${$props => ($props.windowHeight < 700 ? rw(75) : rw(72))}px;
  align-items: center;
`;
export const SignoutButton = styled.TouchableOpacity`
  height: ${rh(6)}px;
  width: ${rw(35)}px;
  background-color: ${Colors.blue};
  border-radius: ${rw(5)}px;
  justify-content: center;
  align-items: center;
`;

export const SignoutText = styled.Text`
  font-size: ${rs(16)}px;
  color: ${Colors.white};
`;
