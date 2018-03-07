// ECMAS5
// const firstAjax = function() {
//
//   const url = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/53c532787c14221b87d401e2256f1f8b/37.8267,-122.4233";
//   fetch (url)
//     .then(function(response){
//       response.json().then(function(json){
//           console.log(json);
//       })
//     })
// }

// firstAjax();


// ECMAS6
const firstAjax = () => {

  const url = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/53c532787c14221b87d401e2256f1f8b/37.8267,-122.4233";
  fetch(url)
    .then( response  => response.json()).then( json => drawWeather(json));
  };

const drawWeather = function(json) {
  const weatherTodayContainer = document.getElementById('weather-today-container');
  const weatherForecastContainer = document.getElementById('weather-forecat-container');

  let template = `
  <div>Temperature: ${json.currently.apparentTemperature} </div>
  <div>Humidity: ${json.currently.humidity}</div>
  <div>UV index: ${json.currently.uvIndex}</div>
  <div>Pressure: ${json.currently.pressure}</div> `;

weatherTodayContainer.innerHTML = template;

let templateForCast = json.daily.data.forEach(function(day){

  let currentDay = ` <hr>
    <div>${unixDateToCurrentDate(day.time)}</div>
    <div>Icon : ${day.icon}</div>
    <div>Temperature-high: ${day.temperatureHigh} and Temperature-min: ${day.temperatureMin}</div>`;

weatherForecastContainer.insertAdjacentHTML('beforeEnd', currentDay);
  });
};

const unixDateToCurrentDate = function(unixNumber) {
  return new Date(unixNumber * 1000).toLocaleString('es-MX', { weekday: 'long'});
};

firstAjax();
