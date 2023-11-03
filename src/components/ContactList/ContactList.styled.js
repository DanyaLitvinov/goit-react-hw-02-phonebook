import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 300px;
`;

export const Item = styled.li`
display: flex;
margin-bottom: 10px;
gap: 8px;
justify-content: space-between;
`

export const Button = styled.button`
background-color: #007bff;
color: white;
border: none;
padding: 5px 20px;
&:hover {
  background-color: #F00302; `