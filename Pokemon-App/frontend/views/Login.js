import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Login({route}){
    return(
        <KeyboardAvoidingView>
            <View>
                <Image source={require('../assets/img/logo.png')}/>
            </View>

            <View>
                <TextInput placeholder='usuário' />
                <TextInput placeholder='senha' secureTextEntry={true} />
                <TouchableOpacity>
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        
    )
}