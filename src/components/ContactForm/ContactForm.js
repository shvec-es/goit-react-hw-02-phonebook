import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
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

const Button = styled.button`
  background: DarkCyan;
  color: white;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid DarkCyan;
  border-radius: 3px;
  cursor: pointer;

  &:hover,
  &:focus {
    background: white;
    color: DarkCyan;
  }
`;

class ContactForm extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.contacts.find(contact => contact.name === this.state.name)
      ? alert(`${this.state.name} is already in contacts!`)
      : this.props.onSubmit({
          name: this.state.name,
          number: this.state.number,
        });

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <br />
          <Input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChange}
            required
          />
        </Label>
        <Label>
          Number
          <br />
          <Input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleChange}
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
