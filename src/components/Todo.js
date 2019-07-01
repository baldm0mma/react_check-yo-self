import React from 'react';
import './App.css';

const Todo = ({ todo, taskId, toggleCompletion }) => {
  const buttonText = todo.isCompleted ? 'Completed' : 'NOT completed';
  return (
    <div>
      <button
        className='ui button'
        type='checkbox'
        onClick={() => toggleCompletion(taskId, todo.id)}
      >
        {buttonText}
      </button>
      <p>{todo.content}</p>
    </div>
  );
};

export default Todo;
