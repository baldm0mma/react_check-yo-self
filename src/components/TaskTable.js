import React from 'react';
import './TaskTable.css';
import Card from './Card';

const TaskTable = props => {
  
  const showTasks = props.tasks.map(task => {
    return(
      <Card
        title={task.title}
        isUrgent={task.isUrgent}
        todoList={task.todoList}
        id={task.id}
      />
    )
  });

  return(
    <section>
      {showTasks}
    </section>
  );
}

export default TaskTable;