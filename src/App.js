import React, { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    const Wrapper = styled.div`
      width: 600px;
      display: flex;
      justify-content: space-between;
      margin: 25px auto 0;
    `;

    const Title = styled.h2`
      font-size: 1.5em;
      text-align: center;
      color: DarkCyan;
    `;

    return (
      <Wrapper>
        <div>
          <Title>Phonebook</Title>
          <ContactForm contacts={filteredContacts} onSubmit={this.addContact} />
        </div>
        {filteredContacts.length > 0 ? (
          <div>
            <Title>Contacts</Title>
            <Filter filter={filter} onChange={this.changeFilter} />
            <ContactList
              contacts={filteredContacts}
              onClick={this.deleteContact}
            />
          </div>
        ) : (
          <Title>You don't have contacts</Title>
        )}
      </Wrapper>
    );
  }
}

export default App;
