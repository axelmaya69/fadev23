import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './navigation/screens/MyTabs';
import Login from './navigation/screens/Login';
import { View } from 'react-native-web';

export default function App() {
 
  return (
      <NavigationContainer> 
      {/* <MyTabs/> */}
      <Login/>
    </NavigationContainer>
    
  );
}