import React from 'react';
import ContactListItem from './ContactListItem';
import { List, Items } from 'styles';

const ContactList = ({ contacts, onClick }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Items key={id}>
          <ContactListItem
            id={id}
            name={name}
            number={number}
            onClick={onClick}
          />
        </Items>
      ))}
    </List>
  );
};

export default ContactList;
