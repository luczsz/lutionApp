import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AntDesign } from '@expo/vector-icons';

import Home from '../pages/Home';
import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';

export default function AppRoutes(){

    const AppStack = createNativeStackNavigator();
    const AppTabs = createBottomTabNavigator();

    function Tabs(){

        return(
            
        <AppTabs.Navigator
            screenOptions={{
                tabBarShowLabel: false,
            }}
        >
            <AppTabs.Screen
                name='Home1'
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused}) => {
                        if(focused){
                        return <AntDesign name="home" size={24} color="#BA68C8" />
                    }
                        return <AntDesign name="home" size={24} color="#DDD" />

                    }
                }}
                
            />
        </AppTabs.Navigator>
        )


    }

    return(
        <AppStack.Navigator>
            <AppStack.Screen
                name='Home2'
                component={Tabs}
                options={{
                    headerShown: false,
                }}
            />
            <AppStack.Screen
                name='SingIN'
                component={SingIn}
                options={{
                    headerShown: false,
                }}
            />
            <AppStack.Screen
                name='SingUp'
                component={SingUp}
                options={{
                    headerShown: false,
                }}
            />
        </AppStack.Navigator>
    );
}