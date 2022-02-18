const search = document.querySelector('.weather__search-input')
const city = document.querySelector('.weather__location-city')
const country = document.querySelector('.weather__location-country')
const status = document.querySelector('.weather__status-title')
const content = document.querySelector('.content')
const degree = document.querySelector('.weather__temperature-degree')
const wind = document.querySelector('.weather__parameter-windy p')
console.log(wind)

console.log(city)

async function changeWeatherUi() {
    
    const valueSearch = search.value.trim();
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${valueSearch}&appid=9772dcda82285501e0cd48ae840b11e4`;
    let data = await fetch(apiUrl)
        .then(response => response.json())
    console.log(data)
    if (data.cod == 200) {
        city.innerText = data.name;
        country.innerText = data.sys.country;
        status.innerText = data.weather[0].main;
        degree.innerText = Math.round(data.main.temp - 273.15) + '°C';
        wind.innerText = Math.round(data.wind.speed) + 'km/h';
    } else {
        content.classList.add('active')
    }

}
search.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        changeWeatherUi();
    }
})