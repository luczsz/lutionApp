import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { styles } from './style';

export default function SingIn() {

  const navigation = useNavigation();

  function Acadastrar(){
    navigation.navigate('SingUp');
  };

 return (
   <View style={styles.container} >
        <View style={styles.header}>
          <Text>SING IN</Text>
        </View>
        <View style={styles.inputView}>

          <View style={styles.input}>
            <TextInput
              placeholderTextColor={'#FFF'}
              placeholder='Email'
            />
          </View>
          <View style={styles.input}>
            <TextInput
              placeholderTextColor={'#FFF'}
              placeholder='Senha'
            />
            <Feather name="eye" size={24} color="#FFF" />
          </View>

        </View>
        <View style={styles.bottomView} >
            <TouchableOpacity 
            style={styles.bottom}
            >
                <Text style={styles.textBottom} >ENTRAR</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TouchableOpacity 
          style={styles.bottomCad}
          onPress={ () => Acadastrar() }
          >
            <Text  style={styles.textCad} >Cadastre-se</Text>
          </TouchableOpacity>
        </View>
        
   </View>
  );
}