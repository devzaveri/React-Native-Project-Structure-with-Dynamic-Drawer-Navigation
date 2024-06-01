import styled from 'styled-components/native';
import {Platform, StyleSheet} from 'react-native';
import {rh, rs, rw} from 'react-native-full-responsive';
import { Colors } from '../../../helpers';

// MainViewComponent,
//   MainHeaderFunction,
//   BackBtn,

export const MainViewComponent = styled.View`
flex: 1;
`

export const MainHeaderFunction = styled.View`
padding: ${rh(2)}px;
flex-direction: row;
`

export const BackBtn = styled.TouchableOpacity`
height: ${rh(4)}px;
width: ${rh(6)}px;

justify-content: center;
align-items: center;
`
export const BackImg = styled.Image`
height: ${rh(5)}px;
width: ${rw(8)}px;
`

export const MainView = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;
export const AlertBtn = styled.TouchableOpacity`
background: ${Colors.alertClr};
padding-top: ${rh(1)}px;
padding-bottom: ${rh(1)}px;
padding-left: ${rw(2)}px;
padding-right: ${rw(2)}px;
border-radius: ${rw(50)}px;
`;
export const AlertText = styled.Text``