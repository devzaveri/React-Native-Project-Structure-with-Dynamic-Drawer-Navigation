import {
  MainViewComponent,
  MainHeaderFunction,
  BackBtn,
  BackImg,
  MainView,
  AlertBtn,
  AlertText
} from './MySecondScreenStyles'

import { View, Text } from 'react-native'
import React from 'react'
import { Images } from '../../../helpers'
import { showAlert } from '../../../helpers/Alerts'
import ThemeAlert from '../../../components/ThemeAlert/ThemeAlert'
import { useAlert } from '../../../components/ThemeAlert/AlertService'

const MySecondScreen = ({navigation}) => {
  const { showAlert, hideAlert, alertVisible, alertTitle, alertMessage } = useAlert();
  function HeaderFunction(){
    return(
      <MainHeaderFunction>
        <BackBtn onPress={()=> {
          navigation.goBack()
        }}>
          <BackImg resizeMode='contain' source={Images.back} />
        </BackBtn>
      </MainHeaderFunction>
    )
  }


  function MainViewFunc(){
    return(
      <MainView>
        <AlertBtn onPress={() => showAlert('Alert Title', 'This is a sample alert message.')}> 
          <AlertText>Alert Box</AlertText>
        </AlertBtn>
      </MainView>
    )
  }



  return (
    <MainViewComponent>
      {HeaderFunction()}
    <ThemeAlert visible={alertVisible} title={alertTitle} message={alertMessage} onClose={hideAlert} />

      {MainViewFunc()}
    </MainViewComponent>
  )
}

export default MySecondScreen