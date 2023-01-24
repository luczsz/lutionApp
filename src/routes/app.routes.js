import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';

export default function AppRoutes(){

    const AppStack = createNativeStackNavigator();
    const AppTabs = createBottomTabNavigator();

    function Tabs(){
        <AppTabs.Navigator>
            <AppTabs.Screen
                name='Home'
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
    }

    return(
        <AppStack.Navigator>
            <AppStack.Screen
                name='Home'
                component={Tabs}
            />
        </AppStack.Navigator>
    );
}