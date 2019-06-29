import React from 'react';
import './Todo.css';

const Todo = ({ todo }) => {

  return(
    <div>
      <input type='checkbox'></input>
      <p>{todo.content}</p>
    </div>
  );
}

export default Todo;