import React from 'react';
import { Text, ButtonItems } from 'styles';
import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number, onClick }) => {
  return (
    <>
      <Text>{name}:</Text>
      <Text>{number}</Text>
      <ButtonItems type="button" onClick={() => onClick(id)}>
        Delete
      </ButtonItems>
    </>
  );
};

ContactListItem.propTypes = {
  contacs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactListItem;
