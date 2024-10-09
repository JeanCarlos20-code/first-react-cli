import React from 'react';
import {
  Platform,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import { TaskList } from '../components/TaskList';

interface Task {
  id: string;
  title: string;
}

export function Home(): React.JSX.Element {
  const [newTask, setNewTask] = React.useState('');
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const handleAddNewTask = () => {
    const data = {
      id: String(new Date().getTime()),
      title: newTask ? newTask : 'Task empty',
    };

    setTasks([...tasks, data]);
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Hello World</Text>
        <TextInput
          onChangeText={setNewTask}
          placeholderTextColor='#555'
          placeholder='Nova tarefa...'
          style={styles.input}
        />
        <TouchableOpacity
          onPress={handleAddNewTask}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>

        <Text style={styles.titleTasks}>Minhas Tarefas</Text>

        {/* <ScrollView>
          {tasks.map(task => (
          <TouchableOpacity key={task.id} style={styles.buttonTask}>
            <Text style={styles.titleTask}>{task.title}</Text>
          </TouchableOpacity>
        ))}
        </ScrollView> */}

        <TaskList tasks={tasks}/>

      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121214',
  },
  container: {
    flex: 1,
    backgroundColor: '#121214',
    padding: 30,
    paddingVertical: 50,
  },
  title: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleTasks: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 50,
  },
  input: {
    backgroundColor: '#29292e',
    color: '#f1f1f1',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 12,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#eba417',
    marginTop: 20,
    alignItems: 'center',
    padding: 15,
    borderRadius: 7,
  },
  buttonText: {
    color: '#121212',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonTask: {
    backgroundColor: '#29292e',
    marginTop: 10,
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
  },
  titleTask: {
    color: '#f1f1f1',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
