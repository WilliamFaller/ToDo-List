import { View, Text, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { styles } from './styles';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons'; // expo install @expo/vector-icons

type Props = {
    name: string;
    selected: () => void;
    deselected: () => void;
    completed: boolean;
    onRemove: () => void;
}

export function ItemList({ name, onRemove, selected, deselected, completed }: Props) {

    function removeItem() {
        onRemove();
    }

    function isSelected() {
        if (!completed) {
            selected();
        } else {
            deselected();
        }
    }

    return (
        <TouchableOpacity
            style={styles.lista}
            onPress={() => isSelected()}>
            <Checkbox
                color={!completed ? '#4EA8DE' : '#8284FA'}
                style={styles.checkbox}
                disabled={false}
                value={completed}
                onValueChange={() => selected()}
            />
            <Text style={!completed ? styles.name : styles.nameOff}>
                {name}
            </Text>
            <TouchableOpacity style={styles.remove} onPress={() => removeItem()}>
                <FontAwesome name="trash-o" color="gray" size={20} />
            </TouchableOpacity>
        </TouchableOpacity>
    );
}