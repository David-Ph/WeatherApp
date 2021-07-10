const APP_ID = process.env.APP_ID;

async function getWeather(cityName) {
  const data = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APP_ID}`,
    { mode: "cors" }
  );
  const weatherData = await data.json();
  console.log(weatherData.weather[0].description);
}

module.exports = {
  getWeather,
};
