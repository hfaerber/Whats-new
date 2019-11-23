import React, {Component} from 'react';
import './SearchForm.css';
import PropTypes from 'prop-types';

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

  handleSearchButton = event => {
    this.props.filterBySearch(event, this.state.searchQuery);
    this.resetSearchField();
  }

  resetSearchField = () => {
    this.setState({
      searchQuery: ''
    })
  }

  render() {
    return(
      <header>
        <h1>What's new?</h1>
        <form>
        <input className='formInput' type='text'
          placeholder='Search for news articles here'
          value={this.state.searchQuery}
          onChange={event => this.handleChange(event)}
          />
        <button className="formButton"
          onClick={event => this.handleSearchButton(event)}>Search Now</button>
        </form>
      </header>
    )
  }
}

SearchForm.propTypes = {
  filterBySearch: PropTypes.func,
}

export default SearchForm;
