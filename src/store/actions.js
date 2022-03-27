import { getWeather } from "../components/API";
import { getParsedWeather, isCityInList, getForecastList } from "../components/helpers"

export const actions = {
  ADD_CITY : 'ADD_CITY',
  REMOVE_CITY : 'REMOVE_CITY',
  SET_WEATHER : 'SET_WEATHER',
  TOGGLE_LIKE : 'TOGGLE_LIKE',
  SET_FORECAST : 'SET_FORECAST',
};

export function addCity(cityName){
  return {
    type : actions.ADD_CITY,
    cityName
  };
}

export function removeCity(cityName){
  return {
    type : actions.REMOVE_CITY,
    cityName
  };
}

export function setWeather(weather){
  return {
    type : actions.SET_WEATHER,
    weather
  };
}

export function fetchWeather(cityName){
  return async function (dispatch, getState) {
    const _newWeatherNow = await getWeather(cityName, 'weatherNow');
    const newWeatherNow = getParsedWeather(_newWeatherNow, cityName);
    newWeatherNow.isLiked = isCityInList(cityName, getState().likedCities);
    dispatch(setWeather(newWeatherNow));
  }
}

export function setForecast(forecast){
  return {
    type : actions.SET_FORECAST,
    forecast
  };
}

export function fetchForecast(cityName){
  return async function (dispatch) {
    const _newForecast = await getWeather(cityName, 'forecast');
    const newForecast = getForecastList(_newForecast, cityName);
    dispatch(setForecast(newForecast));
  }
}

export function fetchData(cityName){
  return async function (dispatch) {
    dispatch(fetchWeather(cityName));
    dispatch(fetchForecast(cityName));
  }
}
