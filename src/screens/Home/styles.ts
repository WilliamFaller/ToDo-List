import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    containerTop: {
        height: 200,
        alignItems: 'center',
        backgroundColor: '#000',
    },
    containerMiddle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#1b1b1c',
    },
    textLogo: {
        color: '#fff',
        marginTop: 100,
        fontSize: 24,
        fontWeight: 'bold',
    },
    inputContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: -30,
    },
    button:{
        justifyContent: 'center',
        backgroundColor: '#4EA8DE',
        width: 56,
        height: 56,
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 22,
    },
    input: {
        width: '65%',
        height: 56,
        backgroundColor: '#1f1e25',
        borderColor: '#000',
        borderWidth: 0.5,
        borderRadius: 5,
        color: '#fDFCFE',
        padding: 16,
        fontSize: 16,
        marginRight: 12,
    },
    listEmptyTitle: {
        color: '#a1a1a1',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    listEmptyText: {
        color: '#a1a1a1',
        fontSize: 14,
        textAlign: 'center',
    },
    container: {
        marginTop: 60
    },
        lista: {
        width: 300,
        marginTop: 30,
    },
})