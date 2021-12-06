import React from 'react';
import { TextFilter, Input } from 'styles';
import PropTypes from 'prop-types';

const Filter = ({ filter, onChange }) => {
  return (
    <>
      <TextFilter>Find contacts by name</TextFilter>
      <Input type="text" name="filter" value={filter} onChange={onChange} />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
};

export default Filter;
