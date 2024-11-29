import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import ToDoForm from "../ToDoForm";
import ToDoList from "../ToDoList";

export default function Page() {

  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = (task) => {
    if (!tasks.includes(task) && task.trim() !== '') { // Prevent duplicates and empty tasks
      setTasks([...tasks, task]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
