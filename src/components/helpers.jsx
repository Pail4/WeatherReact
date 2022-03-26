import { getWeatherIcon, getWeather } from "./API";
import { store } from '../store/store'
import * as actions from '../store/actions'

function getParsedWeather(fromObj, cityName) {
  const targetObj = {};
  targetObj.cityName = cityName;
  targetObj.temperature = Math.round(fromObj.main.temp);
  targetObj.feelsLike = Math.round(fromObj.main["feels_like"]);
  targetObj.weather = fromObj.weather[0].main;
  targetObj.sunrise = parseTime(fromObj.sys.sunrise);
  targetObj.sunset = parseTime(fromObj.sys.sunset);
  const iconCode = fromObj.weather[0].icon;
  targetObj.weatherIcon = getWeatherIcon(iconCode);

  return targetObj;
}

export function getForecastList(forecast, cityName) {
  const blocks = [];
  forecast.list.forEach((item) => {
    const date = parseDate(item["dt"]);
    const time = parseTime(item["dt"]);
    const weather = getParsedWeather(item, cityName);
    blocks.push( 
      {
        date,
        time,
        weather
      }
    );
  });
  return blocks;
}

export function setAllWeather(cityName){
  setWeather(cityName);
  setForecast(cityName);
}

async function setWeather(cityName){
  const _newWeatherNow = await getWeather(cityName, 'weatherNow');
  const newWeatherNow = getParsedWeather(_newWeatherNow, cityName);
  newWeatherNow.isLiked = isCityInList(cityName, store.getState().likedCities);
  store.dispatch(actions.setWeather(newWeatherNow));
  return newWeatherNow;
}

async function setForecast(cityName) {
  const _newForecast = await getWeather(cityName, 'forecast');
  const newForecast = getForecastList(_newForecast, cityName);
  store.dispatch(actions.setForecast(newForecast));
}


function isCityInList(cityName, list) {
  return !!list.find((city) => {
    return city === cityName;
  });
}

function parseTime(timeUNIX) {
  if (!timeUNIX) return undefined;

  let date = new Date(timeUNIX * 1000);

  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  return hours + ':' + minutes.slice(-2);
}

function parseDate(timeUNIX) {
  let date = new Date(timeUNIX * 1000);

  return date.getDate() + ' ' + date.toLocaleString('en', { month: 'short' });
}