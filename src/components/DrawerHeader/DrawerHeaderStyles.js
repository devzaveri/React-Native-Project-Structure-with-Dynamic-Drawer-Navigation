import styled from 'styled-components/native';
import {Platform, StyleSheet} from 'react-native';
import {rh, rs, rw} from 'react-native-full-responsive';
import {Colors} from '../../helpers';

export const MainComponentView = styled.View`
 height: rh(20);
        width: ${$props => $props.windowHeight < 700 ? rw(75) : rw(72)}px;
        justify-content: center;
        align-items: center;
`;
export const HeaderImg = styled.Image`
height: ${rh(10)}px;
 width: ${rw(25)}px;
`

export const LogoText = styled.Text`
font-size: ${rs(18)}px;
 margin-top: ${rh(1)}px;
`