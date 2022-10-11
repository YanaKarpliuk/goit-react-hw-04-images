import styleBtn from './button.module.css';
import PropTypes from 'prop-types';

export default function Button(props) {
  const displayBtn = () => {
    if (props.items.length === 0) {
      return <p className={styleBtn.info}>No content to display</p>;
    } else if (props.items.length === props.total) {
      return <p className={styleBtn.info}>You've all caught up!</p>;
    } else {
      return (
        <button className={styleBtn.button} onClick={props.onClick}>
          Load more
        </button>
      );
    }
  };
  return displayBtn();
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  items: PropTypes.array,
  total: PropTypes.number,
};
