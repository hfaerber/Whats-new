import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import NewsContainer from './../NewsContainer/NewsContainer.js'
import Menu from './../Menu/Menu.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedNews: '',
      local,
      entertainment,
      health,
      science,
      technology,
    }
  }

  selectNews = (newsType) => {
    this.setState({ selectedNews: newsType });
    console.log(this.state.local)
  }

  render () {
    return (
      <div className="app">
        <Menu />
        <NewsContainer
          localData = {this.state.local}
        />
      </div>
    );
  }
}

export default App;
