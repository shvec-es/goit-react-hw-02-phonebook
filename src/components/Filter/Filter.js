import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  margin-left: 10px;
  color: Teal;
  font-size: 1em;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: Teal;
  background: AliceBlue;
  border: none;
  border-radius: 3px;
`;

const Filter = ({ filter, onChange }) => {
  return (
    <>
      <Text>Find contacts by name</Text>
      <Input type="text" name="filter" value={filter} onChange={onChange} />
    </>
  );
};

export default Filter;
