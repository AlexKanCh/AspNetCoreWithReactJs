import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        // Запрос к бекенду
        axios.get('https://localhost:7168/weatherforecast')
            .then(response => {
                setWeatherData(response.data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Погода</h1>
            {weatherData.length > 0 ? (
                <ul>
                    {weatherData.map((forecast, index) => (
                        <li key={index}>
                            <strong>{forecast.date}</strong>: {forecast.temperatureC}°C, {forecast.summary}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Загрузка данных...</p>
            )}
        </div>
    );
}

export default App;