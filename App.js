import React, { useMemo, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Task from "./components/taskItem";
import InputAddTask from "./components/addTask";

export default function App() {
  const [tasks, setTask] = useState([
    "Learn React Native for Payment System",
    "To be one of the Best TeamLeads in my Team",
  ]);
  const deleteTask = (index) => {
    setTask(tasks.filter((obj, id) => id !== index));
    return 0;
  };

  const addTask = (value) => {
    setTask([...tasks, value]);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO LIST</Text>
      {tasks.map((task, index) => (
        <Task index={index} task={task} deleteTask={deleteTask} />
      ))}

      <InputAddTask addTask={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1A3C",
  },
  heading: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
});
