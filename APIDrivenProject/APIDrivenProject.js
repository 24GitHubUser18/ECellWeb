document.getElementById('weatherForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const location = document.getElementById('location').value;
    getCoordinates(location);
});

function getCoordinates(location) {
    const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const latitude = data[0].lat;
                const longitude = data[0].lon;
                getWeather(latitude, longitude, location);
            } else {
                alert('Location not found');
            }
        })
        .catch(error => {
            console.error('Error fetching the coordinates:', error);
        });
}

function getWeather(latitude, longitude, location) {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the entire response object
            if (data && data.current_weather) {
                displayWeather(data.current_weather, location);
            } else {
                alert('Weather data not available');
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
}

function displayWeather(data, location) {
    const weatherResult = document.getElementById('weatherResult');
    const locationName = document.getElementById('locationName');
    const temperature = document.getElementById('temperature');
    const condition = document.getElementById('condition');

    locationName.textContent = `Weather in ${location}`;
    temperature.textContent = `Temperature: ${data.temperature}°C`;
    condition.textContent = `Condition: ${data.weathercode}`;

    weatherResult.style.display = 'block';
}
