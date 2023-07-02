import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    checkbox:{
        marginLeft: 16,
        borderRadius: 20,        
    },
    lista: {
        width: 300,
        height: 56,
        backgroundColor: '#333',
        borderRadius: 5,        
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    name:{
        flex: 1,
        fontSize: 16,
        marginLeft: 16,
        color: '#fff',
    },
    nameOff:{
        flex: 1,
        fontSize: 16,
        marginLeft: 16,
        color: '#808080',
        textDecorationLine: 'line-through',
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
    },
    remove: {
        width: 45,
        height: 45,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});