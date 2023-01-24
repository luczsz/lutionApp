import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes';
import AppRoutes from './src/routes/app.routes';


import { NavigationContainer } from '@react-navigation/native';


export default function App(){
  return(

    <NavigationContainer>
      <StatusBar backgroundColor='#131313' style='light' />
      <AppRoutes />
    </NavigationContainer>

  );
}