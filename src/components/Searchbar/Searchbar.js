import { Component } from 'react';
import styleSearchbar from './searchbar.module.css';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  checkOnSubmit = e => {
    e.preventDefault();
    if (this.state.inputValue.length === 0) {
      alert('Please enter the search query');
    } else {
      this.props.onSubmit(this.state.inputValue);
    }
  };

  render() {
    return (
      <header className={styleSearchbar.searchbar}>
        <form
          className={styleSearchbar.searchForm}
          onSubmit={this.checkOnSubmit}
        >
          <button type="submit" className={styleSearchbar.searchForm_button}>
            <span className={styleSearchbar.searchForm_button_label}>
              Search
            </span>
          </button>

          <input
            className={styleSearchbar.searchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
