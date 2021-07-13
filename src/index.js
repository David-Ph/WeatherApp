// ? import module
import { getWeather } from "./weather";
// getWeather("London");

// ? cache dom
const inputCity = document.getElementById("input-city");
const submitCity = document.getElementById("submit-city");
const weatherInfoBlock = document.querySelector(".weather-info");

// ? add event listener
submitCity.addEventListener("click", onSubmit);

// ? functions
function onSubmit() {
  renderWeather();
}

async function renderWeather() {
  const cityName = inputCity.value;
  const weatherData = await getWeather(cityName);
  if (!weatherData || weatherData.cod === "404") {
    throwError();
    return;
  }

  const div = document.createElement("div");
  weatherInfoBlock.innerHTML = "";
  div.classList.add("column");
  div.innerHTML = `
            <h3 class="title is-2 city-name">${weatherData.name}, ${
    weatherData.sys.country
  }</h2>
            <h3 class="title is-4 city-status has-text-white">${
              weatherData.weather[0].main
            }</h2>
            <div class="columns is-mobile">
              <div class="column is-one-fifth">
                <h2 class="title is-2 city-degree has-text-white">${Math.floor(
                  weatherData.main.temp
                )} °C</h4>
              </div>
              <div class="column">
                <div class="city-info has-text-white">
                  <p>FEELS LIKE: ${weatherData.main.feels_like} °C</p>
                  <p>WIND: ${weatherData.wind.speed} MPH</p>
                  <p>HUMIDITY: ${weatherData.main.humidity}</p>
                </div>
              </div>
            </div>
    `;

  weatherInfoBlock.appendChild(div);
}

function throwError() {
  weatherInfoBlock.innerHTML = "";

  const error = document.createElement("p");
  error.classList.add("error");
  error.innerText = "Not found!";

  weatherInfoBlock.appendChild(error);
}
