import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0); // Default value: 0
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState('metric'); // Default unit: Celsius
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = '168a8547c64e8131cdb281d6ebd6be43';

  const incrementCount = () => {
    if (count < 40) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reverseString = (str) => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  };

  const fetchWeather = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`);
      setWeatherData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setWeatherData(null);
      setLoading(false);
    }
  };

  const handleChangeUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
    fetchWeather();
  };

  return (
    <div className="App">
      <h1>Q1:</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>

      <h1>Q2:</h1>
      <span>Input: "hello". Output: "{reverseString("hello")}"</span><br />
      <span>Input: "world". Output: "{reverseString("world")}"</span><br />
      <span>Input: "". Output: "{reverseString("")}"</span>

      <h1>Q3:</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button disabled={!city || loading} onClick={fetchWeather}>Get Weather</button><br />
      {error && <span className='error'>{error}</span>}
      {weatherData && (
        <div>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {loading ? 'Loading...' : `${weatherData.main.temp}\u00B0${unit === 'metric' ? 'C' : 'F'}`}</p>
          <p>Description: {loading ? 'Loading...' : weatherData.weather[0].description}</p>
          <button disabled={loading} onClick={handleChangeUnit}>
            Change to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
          </button>
        </div>
      )}

    </div>
  );
}

export default App;
