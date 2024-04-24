import React from 'react';
import './App.css';
import Counter from './components/Counter';
import ReverseString from './components/ReverseString';
import Weather from './components/Weather';

const App = () => {

  return (
    <div className="App">
      <h1>Q1:</h1>
      <Counter />

      <h1>Q2:</h1>
      <ReverseString />

      <h1>Q3:</h1>
      <Weather />

    </div>
  );
}

export default App;
