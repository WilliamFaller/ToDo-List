import { View, Text } from 'react-native';
import { styles } from './styles';

export function Status() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.leftLine}>
                    <Text style={styles.leftText}>Criadas</Text>
                    <View style={styles.leftLineNumber}>  
                        <Text style={styles.leftNumber}>0</Text>
                    </View>      
                </View>
                <View style={styles.rightLine}>
                    <Text style={styles.rightText}>Concluídas</Text>
                    <View style={styles.rightLineNumber}>  
                        <Text style={styles.rightNumber}>0</Text>
                    </View>  
                </View>                    
            </View>
            <View style={styles.separationLine}></View>
        </> 
    )
}