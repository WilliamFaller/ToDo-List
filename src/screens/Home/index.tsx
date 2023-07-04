import { styles } from './styles';
import { View, Text, Alert, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Status } from '../../components/Status';
import { useState } from 'react';
import { ItemList } from '../../components/ItemList';

export default function Home() {

    const [toDoList, setToDoList] = useState<{ name: string; completed: boolean }[]>([]);
    const [toDoName, setToDoName] = useState<string>('')
    const [concluidos, setConcluidos] = useState<number>(0)
    const [criados, setCriados] = useState<number>(0)

    function handleChangeText(text: string) {
        if (text === ' ') {
            setToDoName('');
        } else {
            setToDoName(text);
        }
    }

    function handleParticipantRemove(name: string, completed: boolean) {
        if (completed) {
            Alert.alert('Tarefa concluída', 'Não é possível excluir uma tarefa que está marcada como concluída.');
            return;
        }

        Alert.alert('Remover participante', `Deseja remover ${name} da lista de participantes?`, [
            {
                text: 'Sim',
                onPress: () => {
                    setToDoList(toDoList.filter(task => task.name !== name));
                    deletar();
                },
            },
            {
                text: 'Não',
                style: 'cancel',
            },
        ]);
    }

    function handleTodoAdd() {
        if (toDoName === '') {
            return Alert.alert('Tarefa sem nome', 'Por favor, insira um nome para a tarefa.');
        }

        if (toDoList.find(task => task.name === toDoName)) {
            return Alert.alert('Tarefa existente', 'Por favor, insira um nome diferente para esta tarefa.');
        }

        setToDoList([...toDoList, { name: toDoName, completed: false }]);
        criar();
        setToDoName('');
    }

    function select(index: number) {
        if (!toDoList[index].completed) {
            setConcluidos(concluidos + 1);
            toDoList[index].completed = true; // Mark the task as completed
        }
    }

    function deselect(index: number) {
        if (toDoList[index].completed) {
            setConcluidos(concluidos - 1);
            toDoList[index].completed = false; // Mark the task as not completed
        }
    }

    function criar() {
        setCriados(criados + 1);
    }

    function deletar() {
        setCriados(criados - 1);
    }
    return (
        <>
            <View style={styles.containerTop}>
                <Text style={styles.textLogo}>todo</Text>
            </View>
            <View style={styles.containerMiddle}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor={'#6b6b6b'}
                        style={styles.input}
                        keyboardType='default'
                        onChangeText={e => handleChangeText(e)}
                        value={toDoName}
                    />
                    <TouchableOpacity style={styles.button} onPress={() => handleTodoAdd()}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <Status totalCriados={criados} totalConcluidos={concluidos} />
                <FlatList
                    style={styles.lista}
                    keyExtractor={(_, index) => index.toString()}
                    data={toDoList}
                    renderItem={({ item, index }) => (
                        <ItemList
                            key={index}
                            name={item.name}
                            completed={item.completed} // Pass the completed status as a prop
                            selected={() => select(index)}
                            deselected={() => deselect(index)}
                            onRemove={() => handleParticipantRemove(item.name, item.completed)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={styles.container}>
                            <Text style={styles.listEmptyTitle}>
                                Você ainda não tem tarefas cadastradas
                            </Text>
                            <Text style={styles.listEmptyText}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>
                        </View>
                    )}
                />
            </View>
        </>
    )
}