import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Initial from '../screens/Initial';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Register from '../screens/Register'
import Chat from '../screens/Chat/index';
import { Profile } from '../screens/Profile';

const { Navigator, Screen } = createNativeStackNavigator();


const AuthRoutes = () => {
  return <Navigator initialRouteName='Initial' screenOptions={{ headerShown: false }}>
    <Screen name="Initial" component={Initial} />
    <Screen name="Login" component={Login} />
    <Screen name="Home" component={Home} />
    <Screen name="Register" component={Register} />
    <Screen name="Chat" component={Chat} />
    <Screen name="Profile" component={Profile} />

  </Navigator>
}

export default AuthRoutes;