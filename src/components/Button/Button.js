import { Component } from 'react';
import styleBtn from './button.module.css';
import PropTypes from "prop-types";

export default class Button extends Component {
  displayBtn = () => {
    if (this.props.items.length === 0) {
      return <p className={styleBtn.info}>No content to display</p>;
    } else if (this.props.items.length === this.props.total) {
      return <p className={styleBtn.info}>You've all caught up!</p>;
    } else {
      return (
        <button className={styleBtn.button} onClick={this.props.onClick}>
          Load more
        </button>
      );
    }
  };
  render() {
    return this.displayBtn();
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  items: PropTypes.array,
  total: PropTypes.number
}
