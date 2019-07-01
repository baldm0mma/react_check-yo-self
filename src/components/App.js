import React, { Component } from 'react';
import './App.css';
import TaskCreator from './TaskCreator';
import TaskTable from './TaskTable';
import HeaderSearch from './HeaderSearch';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          title: 'First Title',
          isUrgent: false,
          todoList: [
            {
              content: 'Get er dun',
              id: 1,
              isCompleted: false
            }
          ],
          id: 1
        }
      ],
      searchTerm: ''
    };
  }

  addTask = task => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  toggleUrgency = id => {
    const toggleUrgentState = this.state.tasks.map(task => {
      if (task.id === id) {
        task.isUrgent = !task.isUrgent;
      }
      return task;
    });
    this.setState({ tasks: toggleUrgentState });
  };

  toggleCompletion = (taskId, todoId) => {
    const toggleCompletionState = this.state.tasks.map(task => {
      if (task.id === taskId) {
        task.todoList.map(todo => {
          if (todo.id === todoId) {
            todo.isCompleted = !todo.isCompleted;
          }
          return todo;
        });
      }
      return task;
    });
    this.setState({ tasks: toggleCompletionState });
  };

  deleteTask = id => {
    const taskForDeletion = this.state.tasks.find(task => task.id === id);
    const verifyDeletion = taskForDeletion.todoList.filter(
      todo => todo.isCompleted === false
    );
    if (verifyDeletion.length === 0) {
      const tasksAfterDeletion = this.state.tasks.filter(
        task => task.id !== id
      );
      this.setState({ tasks: tasksAfterDeletion });
    } else {
      alert('Sorry, bitch, get ur shit dun first, then delete it...');
    }
  };

  setFilter = text => {
    this.setState({ searchTerm: text });
  };

  filterSearch = () => {
    if(this.state.searchTerm.length !== 0) {
      const filtered = this.state.tasks.filter(task => task.title.includes(this.state.searchTerm));
      return filtered;
    } else {
      return this.state.tasks;
    }
  };

  render() {
    return (
      <main>
        <HeaderSearch setFilter={this.setFilter} />
        <section className='main-section'>
          <TaskCreator addTask={this.addTask} />
          <TaskTable
            tasks={this.filterSearch()}
            toggleUrgency={this.toggleUrgency}
            toggleCompletion={this.toggleCompletion}
            deleteTask={this.deleteTask}
          />
        </section>
      </main>
    );
  }
}

export default App;
