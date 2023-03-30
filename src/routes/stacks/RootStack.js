import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MessageScreen from './index';
import LoginScreen from '../auth/login';
import SplashScreen from '../../screens/splash';
const Stack = createStackNavigator();

function RootStack() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => setShowSplash(false), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={MessageScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
