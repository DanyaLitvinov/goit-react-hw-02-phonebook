import React from 'react';
import { List, Item, Button } from './ContactList.styled'

const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map((contact) => (
      <Item key={contact.id}>
        {contact.name}: {contact.number}
        <Button type="button" onClick={() => onDeleteContact(contact.id)}>
          Delete
        </Button>
      </Item>
    ))}
  </List>
);

export default ContactList;
