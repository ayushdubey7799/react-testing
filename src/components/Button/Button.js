import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: lightblue;
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    background: lightcoral;
  }
`;

const ResponsiveButton = () => {
  return <Button>Responsive Button</Button>;
};

export default ResponsiveButton;
