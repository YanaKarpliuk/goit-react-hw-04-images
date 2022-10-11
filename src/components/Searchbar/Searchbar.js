import { useState, Component } from 'react';
import styleSearchbar from './searchbar.module.css';
import PropTypes from 'prop-types';

export default function Searchbar(props) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const checkOnSubmit = e => {
    e.preventDefault();
    if (inputValue.length === 0) {
      alert('Please enter the search query');
    } else {
      props.onSubmit(inputValue);
    }
  };

  return (
    <header className={styleSearchbar.searchbar}>
      <form className={styleSearchbar.searchForm} onSubmit={checkOnSubmit}>
        <button type="submit" className={styleSearchbar.searchForm_button}>
          <span className={styleSearchbar.searchForm_button_label}>Search</span>
        </button>

        <input
          className={styleSearchbar.searchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          name="value"
          value={inputValue.value}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
