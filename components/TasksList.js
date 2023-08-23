import { StyleSheet, FlatList, View } from 'react-native';
import { ListItem } from '@rneui/themed';

export default function TaskList() {
    return (
      <View style={styles.listContainer}>
        <FlatList
            data={data}
            renderItem={({item}) => <>
                    <ListItem bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title style={styles.item}>{item.key}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>

                </>
            }   
        />
      </View>
    );
};

//<Text style={styles.item}>{item.key}</Text>

const data = [
    {key: 'Comprar pan'},
    {key: 'Estudiar'},
    {key: 'Entrenar'},
    {key: 'Cursar'},
]

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        width: '80%',
        marginTop: 20,
        borderTopWidth: 1,
    },
    item: {
        justifyContent: 'flex-start',
        fontSize: 18,
    }
});