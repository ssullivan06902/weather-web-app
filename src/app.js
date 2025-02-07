const apiKey = '3bd1590d6c699874f3984157bc0a65a1'; // Replace with your actual OpenWeatherMap API key
const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('location-form');
    const locationInput = document.getElementById('location-input');
    const weatherDisplay = document.getElementById('weather-display');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const location = locationInput.value;
        console.log(`Form submitted with location: ${location}`); // Debugging log
        fetchWeather(location);
    });
});

function fetchWeather(location) {
    const url = `${weatherApiUrl}?q=${location}&appid=${apiKey}&units=metric`;
    console.log(`Fetching weather data from URL: ${url}`); // Debugging log

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Weather data received:', data); // Debugging log
            displayWeather(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            alert('Could not fetch weather data. Please try again.');
        });
}

function displayWeather(data) {
    const weatherDisplay = document.getElementById('weather-display');
    if (data && data.main && data.weather) {
        weatherDisplay.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Condition: ${data.weather[0].description}</p>
        `;
    } else {
        weatherDisplay.innerHTML = '<p>Weather data not available.</p>';
    }
}