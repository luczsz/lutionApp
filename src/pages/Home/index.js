import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation();

  function ALogar(){
    navigation.navigate('SingIN');
  };

 return (
   <View style={styles.container} >
        <Text>HOME</Text>
        <Button
          title='Clique aqui'
          onPress={ () => ALogar() }
        />
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#00a94b',
    alignItems: 'center',
    justifyContent: 'center',
  },
})