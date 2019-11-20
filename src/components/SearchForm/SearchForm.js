import React, {Component} from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: ''
    }
  }

  handleChange = event => {
    this.setState({ searchQuery: event.target.value })
  }

  render() {
    return(
      <header>
        <h1>What's new</h1>
        <form>
        <input className='formInput' type='search'
          placeholder='Search for news articles here'
          value={this.state.searchQuery}
          onChange={event => this.handleChange(event)}
          />
        <button className="formButton"
          onClick={event => this.props.filterBySearch(event, this.state.searchQuery)}>Search Now</button>
        </form>
      </header>
    )
  }
}

export default SearchForm;
