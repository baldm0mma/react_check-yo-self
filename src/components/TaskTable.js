import React from 'react';
import './App.css';
import Card from './Card';

const TaskTable = ({ tasks, toggleUrgency, toggleCompletion, deleteTask }) => {
  const showTasks = tasks.map(task => {
    return (
      <Card
        title={task.title}
        isUrgent={task.isUrgent}
        todoList={task.todoList}
        id={task.id}
        toggleUrgency={toggleUrgency}
        toggleCompletion={toggleCompletion}
        deleteTask={deleteTask}
      />
    );
  });

  return <section className='card-table'>{showTasks}</section>;
};

export default TaskTable;
