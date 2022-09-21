import React, { Component } from 'react';
import PropTypes from "prop-types";
import styling from './contactForm.module.css'

export default class ContactForm extends Component {
  render() {
    return (
      <div className={styling.form_container}>
        <form className={styling.form} onSubmit={this.props.onSubmit}>
          <h3>Name</h3>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <h3>Number</h3>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className={styling.btn_submit} type="submit">Add contact</button>
        </form>
      </div>
    );
  }
} 

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
