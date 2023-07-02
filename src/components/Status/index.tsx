import { View, Text } from 'react-native';
import { styles } from './styles';

type StatusProps = {
    totalCriados: number;
    totalConcluidos: number;
}

export function Status({ totalCriados, totalConcluidos }: StatusProps) {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.leftLine}>
                    <Text style={styles.leftText}>Criadas</Text>
                    <View style={styles.leftLineNumber}>  
                        <Text style={styles.leftNumber}>{totalCriados}</Text>
                    </View>      
                </View>
                <View style={styles.rightLine}>
                    <Text style={styles.rightText}>Concluídas</Text>
                    <View style={styles.rightLineNumber}>  
                        <Text style={styles.rightNumber}>{totalConcluidos}</Text>
                    </View>  
                </View>                    
            </View>
            <View style={styles.separationLine}></View>
        </> 
    )
}