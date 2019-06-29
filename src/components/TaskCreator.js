import React, { Component } from 'react';
import './TaskCreator.css';

class TaskCreator extends Component {
  constructor() {
    super();
    this.state = {
      taskTitle: '',
      taskContent: '',
      todoList: []
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addToList = () => {
    const todo = {
      content: this.state.taskContent,
      id: Date.now(),
      isCompleted: false
    };
    this.setState({ todoList: [...this.state.todoList, todo] });
    this.resetInputs();
  };

  createTaskList = e => {
    e.preventDefault();
    const newTaskList = {
      title: this.state.taskTitle,
      isUrgent: false,
      todoList: this.state.todoList,
      id: Date.now()
    };
    this.props.addTask(newTaskList);
    this.resetState();
  };

  resetInputs = () => {
    this.setState({
      taskContent: ''
    });
  }

  resetState = () => {
    this.setState({
      taskTitle: '',
      taskContent: '',
      todoList: []
    });
  };

  render() {
    return (
      <aside>
        <input
          label='Task Title'
          name='taskTitle'
          value={this.state.taskTitle}
          placeholder='Please enter a title'
          onChange={this.handleChange}
        />
        <input
          label='Task Content'
          name='taskContent'
          value={this.state.taskContent}
          placeholder='Please enter a todo'
          onChange={this.handleChange}
        />
        <button onClick={this.addToList}>+</button>
        <button onClick={this.createTaskList}>Make Task List</button>
      </aside>
    );
  }
}

export default TaskCreator;
