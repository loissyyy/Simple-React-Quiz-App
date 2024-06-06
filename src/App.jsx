// import {StyledButton, ButtonLabel} from './Components/Button.styles';
// import {AppContainer} from "./Components/container.styles";

// function App(){
//   return (
//     <AppContainer>
//       <StyledButton buttonLabel="Hello there" backgroundColor="red" ></StyledButton>

//     </AppContainer>
//   );
// }

// export default App;


// import React from 'react';
// import styled from 'styled-components';

// // Define styled components
// const Container = styled.div`
//   text-align: center;
//   margin: 20px;
// `;

// const Header = styled.header`
//   background-color: #282c34;
//   padding: 20px;
//   color: white;
// `;

// const Title = styled.h1`
//   font-size: 2.5rem;
// `;

// const Button = styled.button`
//   background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
//   color: ${(props) => (props.primary ? 'white' : 'palevioletred')};
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
//   cursor: pointer;

//   &:hover {
//     background: ${(props) => (props.primary ? 'white' : 'palevioletred')};
//     color: ${(props) => (props.primary ? 'palevioletred' : 'white')};
//   }
// `;

// const App = () => {
//   return (
//     <Container>
//       <Header>
//         <Title>Welcome to Styled Components</Title>
//       </Header>
//       <Button primary>Primary Button</Button>
//       <Button>Secondary Button</Button>
//       <Button>Secondary Button</Button>
//       <Button>Secondary Button</Button>
//       <Button>Secondary Button</Button>
//       <Button>Secondary Button</Button>
//       <Button>Secondary Button</Button>
//     </Container>
//   );
// };

// export default App;


import React from 'react';
import Container from './Components/container.style';
import Button from './Components/Button';
import Card from './Components/Card';

const App = () => {

    const handlePrimaryClick = () => {
      alert(' Congratulations on completing primary level, you ca now advance to the Secondary level');
    };

    const handleSecondaryClick = () => {
      alert('Congratulations on completing Secondary level, your work will be reviewed and you will receive a feedback soon!');
    };

    const handleRegistrationClick = () => {
      alert('Registration was successful!!!');
    };

    const handleLogInClick = () => {
      alert('Login successful, WELCOME BACK LOIS!');
    };



  return (
    <Container>
      <header style={{ backgroundColor: '#162644', padding: '20px', color: 'skyblue' }}>
        <h1 style={{ fontSize: '2.5rem' }}>Welcome to Quiz-zaton(2024)</h1>
      </header>
      <Button primary onClick={handleRegistrationClick}>REGISTER NOW </Button>
      <Button onClick ={handleLogInClick}>LOGIN HERE  </Button>



      <Card title="First Stage">
        <Button primary onClick={handlePrimaryClick}>Primary Level</Button>
      </Card>
      <Card title="Final Stage">
        <Button onClick={handleSecondaryClick}>Secondary Level</Button>
      </Card>
      <Card title=" Notice to All Quiz Competitors">
        
            Prepare for the upcoming Quiz-Zaton Challenge!

            Event Date: 22nd June, 2024
            Duration: 5 hours

            We urge all participants to choose their course and thoroughly practice all relevant questions. Your preparation is crucial for success in this intense competition.

            Get ready to showcase your knowledge and skills. Best of luck to everyone! 

            Sincerely, FlexiSAF Edusoft Company
      </Card>
    </Container>
    
  );
};

export default App;
