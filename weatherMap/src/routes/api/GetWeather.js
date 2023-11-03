

async function getWeatherData() {
  const apiKey = '01d58236f8ad3a0f785578d23acb564a';
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}`);
  const data = await response.json();
  console.log(data) 
  return data;
}

export default getWeatherData;

