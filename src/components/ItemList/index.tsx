import { View, Text, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { styles } from './styles';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons'; // expo install @expo/vector-icons

type Props = {
    name: string;
    selected: () => void;
    deselected: () => void;
    onRemove: () => void;
}



export function ItemList({ name, onRemove, selected, deselected }: Props) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    function removeItem() {
        onRemove();
    }

    function isSelected() {
        if (!toggleCheckBox) {
            selected();
        } else {
            deselected();
        }
    }

    return (
        <TouchableOpacity
            style={styles.lista}
            onPress={() => {isSelected(); setToggleCheckBox(!toggleCheckBox);}}>
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
            <TouchableOpacity style={styles.remove} onPress={() => removeItem()}>
                <FontAwesome name="trash-o" color="gray" size={20} />
            </TouchableOpacity>
        </TouchableOpacity>
    );
}