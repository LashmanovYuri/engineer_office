import React from 'react';

import Container from '@material-ui/core/Container';

import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';


function App() {
  return (
    <Container maxWidth="xl">
      {/* <Header /> */}
      <MainPage />
    </Container>
  );
}

export default App;
