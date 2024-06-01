import {View, Text} from 'react-native';
import React from 'react';

import RoutesIndex from './src/routes/Routes';
import DrawerNavigation from './src/components/DrawerNavigation/DrawerNavigation';


const App = () => {
  return (
    <View style={{flex: 1}}>
      <RoutesIndex />
    </View>
  );
};

export default App;
