import { View, Text, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { styles } from './styles';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons'; // expo install @expo/vector-icons

type Props = {
    name: string;
    selected: () => void;
    onRemove?: () => void;
}

export function ItemList({ name, onRemove, selected }: Props) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <TouchableOpacity
            style={styles.lista}
            onPress={() => {setToggleCheckBox(!toggleCheckBox); selected;}}>
            <Checkbox
                color={!toggleCheckBox ? '#4EA8DE' : '#8284FA'}
                style={styles.checkbox}
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => {setToggleCheckBox(newValue); selected}}
            />
            <Text style={!toggleCheckBox ? styles.name : styles.nameOff}>
                {name}
            </Text>
            <TouchableOpacity style={styles.remove} onPress={onRemove}>
                <FontAwesome name="trash-o" color="gray" size={20} />
            </TouchableOpacity>
        </TouchableOpacity>
    );
}