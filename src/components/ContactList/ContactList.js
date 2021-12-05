import React from 'react';
import ContactListItem from './ContactListItem';
import styled from 'styled-components';

const List = styled.ul`
  margin-top: 15px;
  padding: 15px;
  border: 2px solid DarkCyan;
  border-radius: 3px;
`;

const ContactList = ({ contacts, onClick }) => {
  return (
    <List>
      <ContactListItem contacts={contacts} onClick={onClick} />
    </List>
  );
};

export default ContactList;
