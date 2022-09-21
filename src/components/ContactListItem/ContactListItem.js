import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styling from './contactListItem.module.css';

export default class ContactListItem extends Component {
  render() {
    return (
      <li>
        {this.props.name}: {this.props.num}
        <button className={styling.btn_delete} onClick={this.props.onDelete}>
          Delete
        </button>
      </li>
    );
  }
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  num: PropTypes.node.isRequired,
};
