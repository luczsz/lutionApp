import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { styles } from '../SingIn/style';

export default function SingUp() {
 return (
   <View style={styles.container}>
        <View style={styles.headerSingUp} >
    
            <Text>SING UP</Text>

        </View>
        <View style={styles.inputView} >
            <View style={styles.input} >
              <TextInput
                placeholder='Nome'
                placeholderTextColor={'#FFF'}
              />
            </View>
            <View style={styles.input} >
              <TextInput
                placeholder='Email'
                placeholderTextColor={'#FFF'}
              />
            </View>
            <View style={styles.input} >
              <TextInput
                placeholder='Senha'
                placeholderTextColor={'#FFF'}
              />
              <Feather name="eye" size={24} color="#FFF" />
            </View>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.bottom} >
              <Text style={styles.textBottom} >CADASTRAR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TouchableOpacity
          style={styles.bottomCad}
          >
            <Text style={styles.textCad} >LOGAR</Text>
          </TouchableOpacity>
        </View>
        
   </View>
  );
}