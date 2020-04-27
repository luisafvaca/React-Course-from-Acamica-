import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';

const AppStyles = styled.button`
  color: ${props => props.color ? props.color : 'red'};
  border-color: tomato;
  border-radius: 3px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <div className='App'>
       <Container >
        <AppStyles color='tomato'>
          <h1>Hola Mundo</h1>
        </AppStyles>
      </Container>
    </div>
  );
}

AppStyles.Proptypes = {
  color: Proptypes.string
}

export default App;
