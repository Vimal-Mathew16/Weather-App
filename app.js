document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('weather-form');
    const cityInput = document.getElementById('city');
    const resultDiv = document.getElementById('weather-result');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        getWeather(cityInput.value);
    });

    function getWeather(city) {
        const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    resultDiv.innerHTML = `
                        <h2>${data.name}</h2>
                        <p>Temperature: ${data.main.temp} &deg;C</p>
                        <p>Weather: ${data.weather[0].description}</p>
                    `;
                } else {
                    resultDiv.innerHTML = `<p>City not found</p>`;
                }
            })
            .catch(error => {
                resultDiv.innerHTML = `<p>Error fetching data</p>`;
            });
    }
});
