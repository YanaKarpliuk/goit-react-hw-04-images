import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styling from './contactList.module.css';

export default class ContactList extends Component {
  render() {
    return <ul>{this.props.render}</ul>;
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.node.isRequired,
    })
  ),
};
