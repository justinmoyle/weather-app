const apiKey = '9fa437cdf824b13aabed218ddd613fa3';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=`;

const userInput = document.getElementById('city-search');
const submitBtn = document.getElementById('search-btn');
const weatherIcon = document.getElementById('temp-img');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector('#city').innerHTML = data.name; 
    document.querySelector('#temperature').innerHTML = Math.round(data.main.temp) + '&deg;F';
    document.querySelector('#humidity-percent').innerHTML = data.main.humidity + '%';
    document.querySelector('#windspeed-amount').innerHTML = Math.round(data.wind.speed) + ' m/hr';

    if (data.weather[0].main == 'Clouds') {
        weatherIcon.src = 'assets/cloudy.png';
    } else if (data.weather[0].main == 'Clear') {
        weatherIcon.src = 'assets/sunny.png';
    } else if (data.weather[0].main == 'Precipitation') {
        weatherIcon.src = 'assets/raining.png';
    } else if (data.weather[0].main == 'Severe Weather') {
        weatherIcon.src = 'assets/storm.png';
    }
}

submitBtn.addEventListener('click', () => {
    checkWeather(userInput.value);
});

