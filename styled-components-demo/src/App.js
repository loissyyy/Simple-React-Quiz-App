import React from 'react';
import styled from 'styled-components';

// Define styled components
const Container = styled.div`
  text-align: center;
  margin: 20px;
`;

const Header = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
`;

const Title = styled.h1`
  font-size: 2.5rem;
`;

const Button = styled.button`
  background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.primary ? 'white' : 'palevioletred')};
    color: ${(props) => (props.primary ? 'palevioletred' : 'white')};
  }
`;

const App = () => {
  return (
    <Container>
      <Header>
        <Title>Welcome to Styled Components</Title>
      </Header>
      <Button primary>Primary Button</Button>
      <Button>Secondary Button</Button>
    </Container>
  );
};

export default App;
