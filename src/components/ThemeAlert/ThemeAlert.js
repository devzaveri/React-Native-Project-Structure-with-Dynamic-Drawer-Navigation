import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const ThemeAlert = ({visible, title, message, onClose}) => {
  const [isVisible, setIsVisible] = useState(false);


  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>
            {title}
          </Text>
          <Text>{message}</Text>
          <TouchableOpacity
            style={{
              height: 50,
              width: 100,
              backgroundColor: 'blue',
              justifyContent: "center",
              alignItems:'center',
              marginTop: 10
            }}
            onPress={onClose}
          >
            <Text style={{
                fontSize: 20,
                fontWeight:'bold'
            }}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ThemeAlert;
