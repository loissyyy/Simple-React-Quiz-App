import React from 'react';
import { StyledCard, CardTitle, CardContent } from './card.styles';

const Card = ({ title, children }) => {
  return (
    <StyledCard>
      <CardTitle>{title}</CardTitle>
      <CardContent>{children}</CardContent>
    </StyledCard>
  );
};

export default Card;
