import React, { Component } from 'react';
// import local from '../../data/local';
// import entertainment from '../../data/entertainment';
// import health from '../../data/health';
// import science from '../../data/science';
// import technology from '../../data/technology';
import './App.css';
import NewsContainer from './../NewsContainer/NewsContainer.js'
import Menu from './../Menu/Menu.js'
import SearchForm from './../SearchForm/SearchForm.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedNews: 'local',
      filteredSelection: [],
      local: [],
      entertainment: [],
      health: [],
      science: [],
      technology: [],
    }
  }

  componentDidMount() {
    fetch('https://whats-new-api.herokuapp.com/api/v1/news')
      .then(response => response.json())
      .then(data => {
        this.setState({
          local: data.local,
          entertainment: data.entertainment,
          health: data.health,
          science: data.science,
          technology: data.technology,
        })
      })
  }

  setSelectedNews = (newsType) => {
    this.setState({
      selectedNews: newsType,
      filteredSelection: [],
    });
  }

  filterBySearch = (event, searchQuery) => {
    event.preventDefault();
    const searchedArticles =
      this.state[this.state.selectedNews].filter(article =>
        article.headline.toUpperCase().includes(searchQuery.toUpperCase()) ||
        article.description.toUpperCase().includes(searchQuery.toUpperCase()));
    this.setState({ filteredSelection: searchedArticles })
  }

  render () {
    return (
      <div className="app">
        <SearchForm
          filterBySearch = {this.filterBySearch}
        />
        <Menu
          setSelectedNews = {this.setSelectedNews}
        />
        <NewsContainer
          newsType =
          {this.state.filteredSelection.length > 0 ?
            this.state.filteredSelection
          : this.state[this.state.selectedNews]}
        />
      </div>
    );
  }
}

export default App;
