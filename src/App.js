import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import { CambioDivisas } from './components/conversionDivisas'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header title="Cambio de divisas" color='yellow' />

        <CambioDivisas />
        
      </header>
    </div>
  );
}

export default App;
