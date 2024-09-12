// src/App.js
import React from 'react';
import './App.css';
import SpeechToText from './SpeechToText';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Speech to text application</h1>
        <SpeechToText />
      </header>
    </div>
  );
}

export default App;
