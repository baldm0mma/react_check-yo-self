import React from 'react';
import './Card.css';
import Todo from './Todo';

const Card = ({ title, isUrgent, todoList, id }) => {

  const showTodos = todoList.map(todo => {
    return(
      <Todo todo={todo} />
    );
  });

  return(
    <article>
      <h3>{title}</h3>
      {showTodos}
      <section>
        <button>Urgent?</button>
        <button>Delete?</button>
      </section>
    </article>
  );
}

export default Card;