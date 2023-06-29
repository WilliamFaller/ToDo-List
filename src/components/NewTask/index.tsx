import React from 'react';
import { styles } from './styles';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

export function NewTask() {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Adicione uma nova tarefa'
                placeholderTextColor={'#6b6b6b'}
                style={styles.input}
                keyboardType='default'
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}