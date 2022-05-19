import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Initial from '../screens/Initial';
import Login from '../screens/Login'


const { Navigator, Screen } = createNativeStackNavigator();


const AuthRoutes = () => {
  return <Navigator initialRouteName='Initial' screenOptions={{ headerShown: false }}>
    <Screen name="Initial" component={Initial} />
    <Screen name="Login" component={Login} />
  </Navigator>
}

export default AuthRoutes;