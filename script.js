const apiKey = '9fa437cdf824b13aabed218ddd613fa3';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=`;

const userInput = document.getElementById('city-search');
const submitBtn = document.getElementById('search-btn');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector('#city').innerHTML = data.name; 
    document.querySelector('#temperature').innerHTML = Math.round(data.main.temp) + '&deg;F';
    document.querySelector('#humidity-percent').innerHTML = data.main.humidity + '%';
    document.querySelector('#windspeed-amount').innerHTML = Math.round(data.wind.speed) + ' m/hr';


}

submitBtn.addEventListener('click', () => {
    checkWeather(userInput.value);
});

