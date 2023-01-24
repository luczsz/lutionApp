import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
 return (
    <AuthStack.Navigator>
        <AuthStack.Screen
            name='SingIN'
            component={SingIn}
        />
        <AuthStack.Screen
            name='SingUP'
            component={SingUp}
        />
    </AuthStack.Navigator>
  );
}