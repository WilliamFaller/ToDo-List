import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20,
    },
    leftText: {
        color: '#4EA8DE',
        fontWeight: '900',
    },
    rightText: {
        color: '#8284FA',
        fontWeight: '900',
    },
    leftNumber: {
        color: '#fff',
        fontWeight: '900',
    },
    rightNumber: {    
        color: '#fff',
        fontWeight: '900',
    },
    leftLine: {
        flex: 1,
        marginLeft: 30,
        flexDirection: 'row',
    },
    rightLine: {
        marginRight: 30,
        flexDirection: 'row',
    },
    leftLineNumber: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 10,
        width: 30,
        height: 20,
        backgroundColor: '#333',
    },
    rightLineNumber: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 10,
        width: 30,
        height: 20,
        backgroundColor: '#333',
    },
    separationLine: {
        marginTop: 10,
        width: '90%',
        height: 1,
        backgroundColor: '#333',
    }
});