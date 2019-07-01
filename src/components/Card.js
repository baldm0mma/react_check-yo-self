import React from 'react';
import './App.css';
import Todo from './Todo';

const Card = ({
  title,
  isUrgent,
  todoList,
  id,
  toggleUrgency,
  toggleCompletion,
  deleteTask
}) => {
  const showTodos = todoList.map(todo => {
    return <Todo todo={todo} taskId={id} toggleCompletion={toggleCompletion} />;
  });

  const buttonText = isUrgent ? 'URGENT!!!' : 'Trivial'

  return (
    <article className='task-card'>
      <h3>{title}</h3>
      {showTodos}
      <section>
        <button className='ui button' onClick={() => toggleUrgency(id)}>{buttonText}</button>
        <button className='ui button' onClick={() => deleteTask(id)}>Delete?</button>
      </section>
    </article>
  );
};

export default Card;
