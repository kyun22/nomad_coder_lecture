// https://home.openweathermap.org/api_keys
const API_KEY = "";
function onGeoSuccess(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric
  `;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.main.temp} / ${data.weather[0].main}`;
      city.innerText = data.name;
    });
}
function onGeoError() {
  console.error("get current geolocation error.");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
