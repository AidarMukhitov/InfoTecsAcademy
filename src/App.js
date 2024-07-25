import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './App.scss';

const App = () => {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (id, updatedTask) => {
    const updatedTasks = tasks.map(task => (task.id === id ? updatedTask : task));
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;