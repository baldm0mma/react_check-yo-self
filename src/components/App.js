import React, { Component } from 'react';
import './App.css';
import TaskCreator from './TaskCreator';
import TaskTable from './TaskTable';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }

  addTask = (task) => {
    this.setState({ tasks: [...this.state.tasks, task] });
  }

  render() {
    return(
      <main>
        {/* <HeaderSearch /> */}
        <section>
          <TaskCreator addTask={ this.addTask } />
          <TaskTable tasks={ this.state.tasks } />
        </section>
      </main>
    );
  }

}

export default App;