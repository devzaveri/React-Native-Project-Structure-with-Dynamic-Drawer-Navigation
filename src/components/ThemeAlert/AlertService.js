import { useState } from 'react';

export const useAlert = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const showAlert = (title, message) => {
    setAlertTitle(title);
    setAlertMessage(message);
    setAlertVisible(true);
  };

  const hideAlert = () => {
    setAlertVisible(false);
    setAlertTitle('');
    setAlertMessage('');
  };

  return { showAlert, hideAlert, alertVisible, alertTitle, alertMessage };
};