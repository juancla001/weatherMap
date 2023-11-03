export default loadWeather

let weather = [];
const apiKey = '01d58236f8ad3a0f785578d23acb564a';

async function loadWeather() {
const response = await fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=" + apiKey
);
const data = await response.json();
console.log(data)
weather = data.json;
}
loadWeather();