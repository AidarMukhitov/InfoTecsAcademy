import React, { useState } from 'react';
import './Task.scss';

const Task = ({ task, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);
  const [updatedDueDate, setUpdatedDueDate] = useState(task.dueDate);

  const handleEdit = (e) => {
    e.preventDefault();
    const updatedTask = { ...task, title: updatedTitle, description: updatedDescription, dueDate: updatedDueDate };
    editTask(task.id, updatedTask);
    setIsEditing(false);
  };

  return (
    <div className="task">
      {isEditing ? (
        <form onSubmit={handleEdit}>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <textarea
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <input
            type="date"
            value={updatedDueDate}
            onChange={(e) => setUpdatedDueDate(e.target.value)}
          />
          <button type="submit">Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>{task.dueDate}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Task;