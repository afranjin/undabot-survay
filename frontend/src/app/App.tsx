import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainComponent from '../views/MainComponent';
import { ToastComponent } from '../components'
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <MainComponent />
      <ToastComponent />
    </BrowserRouter>
  );
}

export default App;
