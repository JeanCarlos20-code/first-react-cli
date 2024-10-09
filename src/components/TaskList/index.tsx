import React from "react";
import { FlatList, TouchableOpacity, Text, StyleSheet } from "react-native";

interface Task {
  id: string;
  title: string;
}

interface TaskListProps {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps): React.JSX.Element {
  return (
    <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
        <TouchableOpacity style={styles.buttonTask}>
          <Text style={styles.titleTask}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
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
