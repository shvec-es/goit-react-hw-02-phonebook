import React from 'react';
import styled from 'styled-components';

const Items = styled.li`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Text = styled.p`
  color: Teal;
  font-size: 1em;
`;

const Button = styled.button`
  background: DarkCyan;
  color: white;
  height: 30px;

  font-size: 1em;
  border: 2px solid DarkCyan;
  border-radius: 3px;
  cursor: pointer;

  &:hover,
  &:focus {
    background: white;
    color: DarkCyan;
  }
`;

const ContactListItem = ({ contacts, onClick }) => {
  return contacts.map(({ id, name, number }) => {
    return (
      <Items key={id}>
        <Text>{name}:</Text>
        <Text>{number}</Text>
        <Button type="button" onClick={() => onClick(id)}>
          Delete
        </Button>
      </Items>
    );
  });
};

export default ContactListItem;
