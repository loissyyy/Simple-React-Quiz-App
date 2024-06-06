import React from 'react';
import { StyledButton } from './Button.style';

const Button = ({ primary, children , onClick}) => {
  return <StyledButton primary={primary} onClick={onClick}>{children}</StyledButton>;
};

export default Button;
