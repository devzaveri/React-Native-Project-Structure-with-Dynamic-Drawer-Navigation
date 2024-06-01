import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MySecondScreen from '../MySecondScreen/MySecondScreen';

const ProfileScreen = ({navigation}) => {
  console.log('Profile called');
  return (
    <View>
      <Text>ProfileScreen</Text>
      <TouchableOpacity style={{
        height: 50,
        width: 100,
        backgroundColor: "#000"
      }} onPress={()=> {
        navigation.navigate(MySecondScreen)
        // navigation.openDrawer();
      }} />
    </View>
  );
};

export default ProfileScreen;
