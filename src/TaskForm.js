import React, { useState } from 'react';

import './TaskForm.scss';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !dueDate) {
      alert('Title and due date are required!');
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
      dueDate,
      completed: false,
    };

    addTask(newTask);
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;