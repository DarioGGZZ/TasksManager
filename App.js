import { StyleSheet, Text, View } from 'react-native';
import TaskList from './components/TasksList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>TASK MANAGER</Text>
      <TaskList></TaskList>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    fontWeight: 'bold', 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  listContainer: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
