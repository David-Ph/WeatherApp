const APP_ID = process.env.APP_ID;

async function getWeather(cityName) {
  if (!cityName) {
    return;
  }
  const data = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APP_ID}&units=metric`,
    { mode: "cors" }
  );
  const weatherData = await data.json();
  return weatherData;
}

module.exports = {
  getWeather,
};
