import React, { Component } from 'react';
import './App.css';

class HeaderSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => this.props.setFilter(this.state.searchTerm));
  };

  render() {
    return (
      <header className='ui input'>
        <h1>Jev's Suuuper Cool Checklist App</h1>
        <input
          name='searchTerm'
          value={this.state.searchTerm}
          placeholder='Filter here'
          onChange={this.handleChange}
        />
      </header>
    );
  }
}

export default HeaderSearch;
