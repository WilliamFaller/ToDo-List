import { styles } from './styles';
import { View, Text } from 'react-native';
import { NewTask } from '../../components/NewTask';
import { Status } from '../../components/Status';

export default function Home() {
    return (
        <>
            <View style={styles.containerTop}>
                <Text style={styles.textLogo}>todo</Text>
            </View>
            <View style={styles.containerMiddle}>
                <NewTask/>
                <Status/>
            </View>            
        </>
    )
}