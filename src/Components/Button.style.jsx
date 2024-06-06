// import styled from 'styled-components';
// import Button from "./Button"

// export const StyledButton = styled(Button)`
//     width :200px;
//     height:50px;
//     background-color: ${(props)=> props.backgroundColor};


//     &:hover{
//         & label{
//             color: green;
//         }
//     }
// `;

// export const ButtonLabel = styled.label`
//     font-size: 25px;
//     color: yellow;

// `




import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${(props) => (props.primary ? 'skyblue' : '#162644')};
  color: ${(props) => (props.primary ? '#072929' : '#ec68ba')};
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 0.25em;
  border: 20px ridge #162644;
  border-radius: 30px;
  cursor: pointer;
  /* font-family:cursive; */
  font-family:cursive;

  &:hover {
    background: ${(props) => (props.primary ? '#162644' : 'skyblue') };
    color: ${(props) => (props.primary ? '#ec68ba' : '#162644')  };
  }
`;

