
<script>
    import { fade } from "svelte/transition";
    import NavWeather from "./components/navWeather.svelte";
  import WeatherFooter from "./components/weatherFooter.svelte";

    let datas = {};
    const apiKey = '01d58236f8ad3a0f785578d23acb564a';
    let cod = '';
    let isCelsius = true;

    function toggleTemperatureUnit() {
    isCelsius = !isCelsius;
  }
  async function loadWeatherData() {
    try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=" + apiKey
    );
    if (!response.ok) {
            if (response.status === 404) {
                // La ciudad no se encontró, muestra un mensaje apropiado
                console.error("Ciudad no encontrada");
            } else {
                throw new Error("La solicitud a la API no fue exitosa");
            }
        }
      const data = await response.json();
      datas = data;
      
      if (datas.main?.temp) {
                datas.main.temp = (datas.main.temp - 273.15).toFixed(2);
          }
      console.log(data);
    } catch (error) {
      console.error("Error al cargar los datos del clima:", error);
    }
  }
  function searchWeather() {
    loadWeatherData();
  }

</script>

<body>

<h1>Weather Zone</h1>

<NavWeather/>

<div class="search-container">
  <input type="text" bind:value={datas.cod} placeholder="Código" />
  <button class="search-button" on:click={searchWeather}>Buscar Clima</button>
</div>

<div in:fade>
  <div class="grid">
    {#if datas.name}
      <h2>City: {datas.name}</h2>
<h2>Temp: {isCelsius ? `${datas.main?.temp} °C` : `${(datas.main?.temp * 9/5 + 32).toFixed(2)} °F`}</h2>
<button on:click={toggleTemperatureUnit}>
  {#if isCelsius}
    Cambiar a Fahrenheit
  {:else}
    Cambiar a Celsius
  {/if}
</button>
      <h2>Humidity: {datas.main?.humidity}</h2>
      <h2>Weather Description: {datas.weather?.[0]?.description}</h2>
      <h2>Weather Icon condition: {datas.weather[0].icon}</h2>
      <h2>Wind Speed: {datas.wind?.speed} m/s</h2>
    {:else}
      <p class="loading">Loading weather data...</p>
    {/if}
  </div>
</div>

<WeatherFooter/>

</body>

<style>
  
  body {
    background-color: #3498db;
    font-family: Arial, sans-serif;
    text-align: center;
    color: #fff;
    margin: 0;
  }
  .search-container {
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 200px;
    padding: 5px;
    margin-right: 10px;
    border: 1px solid #ccc;
  }

  button {
    background-color: #0077cc;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }

  button:hover {
    background-color: #005599;
  }
  .grid {
    background-color: rgba(0, 0, 0, 0.3);
    padding: 20px;
    border-radius: 10px;
    margin: 20px auto;
    max-width: 80%;
    box-sizing: border-box;
  }

  h1 {
    font-size: 36px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 24px;
    margin: 10px 0;
  }

  p {
    font-size: 18px;
  }

  .loading {
    font-style: italic;
  }
  .search-button {
  background-color: #0077cc;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 18px;

  @media screen and (max-width: 768px) {
    padding: 8px 16px; 
    font-size: 16px;
  }

  &:hover {
    background-color: #005599;
  }
}

  @media screen and (max-width: 768px) {
    /* Estilos para pantallas más pequeñas (por ejemplo, dispositivos móviles) */
    .grid {
      padding: 10px;
      max-width: 90%;
    }

    h1 {
      font-size: 28px;
    }

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }
  }
</style>
