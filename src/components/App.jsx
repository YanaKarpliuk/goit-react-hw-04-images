import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactListItem from './ContactListItem/ContactListItem';
export default class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    form.reset();

    const isDuplicate = this.state.contacts
      .map(item => item.name)
      .includes(name);
    if (isDuplicate) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prev => {
        const newContacts = [...prev.contacts, { name, number, id: nanoid() }];
        return {
          contacts: newContacts,
        };
      });
    }
  };

  onChange = e => {
    this.setState({ filter: e.target.value });
  };

  onClickDelete = (contact) => {
    const newContacts = this.state.contacts.filter(element => element.id !== contact.id)
    this.setState({contacts: newContacts})
  }

  renderList() {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts
      .filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
      .map(searchedContacts => {
        return (
          <ContactListItem
            key={searchedContacts.id}
            name={searchedContacts.name}
            num={searchedContacts.number}
            onDelete={() => this.onClickDelete(searchedContacts)}
          />
        );
      });
  }

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <Filter onChange={this.onChange} value={this.state.filter} />
        <ContactList render={this.renderList()} />
      </div>
    );
  }
}
