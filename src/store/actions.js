export const actions = {
  ADD_CITY : 'ADD_CITY',
  REMOVE_CITY : 'REMOVE_CITY',
  SET_WEATHER : 'SET_WEATHER',
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