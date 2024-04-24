import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [unit, setUnit] = useState('metric'); // Default unit: Celsius
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const API_KEY = '168a8547c64e8131cdb281d6ebd6be43';

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
        <div>
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

export default Weather;
