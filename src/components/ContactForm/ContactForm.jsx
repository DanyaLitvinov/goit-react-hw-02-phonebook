import React, { Component } from 'react';
import { Button, Form, Label } from './ContactForm.styled';


class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;

    this.props.onAddContact(name, number);

    this.setState({ name: '', number: '' });
  };

  render() {


    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </Label>
        <Label>
          Number:
          <input
            type="tel"
            name="number"
            value={this.state.number}
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
