import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class Filter extends Component {
  render() {
    return (
      <input
        type="text"
        name="name"
        onChange={this.props.onChange}
        value={this.props.value}
      />
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
