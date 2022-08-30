import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainComponent from '../views/MainComponent';


function App() {
  return (
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  );
}

export default App;
