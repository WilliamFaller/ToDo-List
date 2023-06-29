import { Text, FlatList } from 'react-native';
import { styles } from './styles';

import { ItemList } from '../ItemList';

export function List() {

    const todoList:string[] = []

    return (
        <FlatList
        keyExtractor={item => item}
        data={todoList}
        renderItem={({ item }) => (
          <ItemList
            key={item}
            name={item}
            //onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
            <>
                <Text style={styles.listEmptyText}>
                    Não há participantes cadastrados, seja o primeiro a adicionar um participante
                </Text>
            </>
        )}
      />
    )
}