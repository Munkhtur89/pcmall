import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainDashboard from '../../screens/main/dashboard';
import MainDelivery from '../../screens/main/delivery';
import MainManagement from '../../screens/main/management';
import MainSettings from '../../screens/main/settings';

const Stack = createStackNavigator();
const MainScreenOptions = {headerShown: false};

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={MainDashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Delivery"
        component={MainDelivery}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Management"
        component={MainManagement}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={MainSettings}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
