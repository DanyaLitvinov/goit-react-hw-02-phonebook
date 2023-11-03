import React from 'react';
import { Label, Input } from './Filter.styled'

const Filter = ({ filter, onChange }) => (
  <Label>
    Find contacts by name:
    <Input
  type="text"
  name="filter"
  value={filter}
  onChange={onChange}
/>

  </Label>
);

export default Filter;