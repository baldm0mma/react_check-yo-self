import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }

  addTask = (task) => {
    this.setState({ task: [...this.state.tasks, task] });
  }

  render() {
    return(
      <main>
        <HeaderSearch />
        <section>
          <TaskCreator />
          <TaskTable />
        </section>
      </main>
    );
  }

}

export default App;