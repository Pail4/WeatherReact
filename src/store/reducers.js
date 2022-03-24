import { combineReducers } from 'redux'

import { actions } from "./actions";
//import { storeDefault } from "./store";

const storeDefault = {
  weather: {
    cityName: "City",
    temperature: "",
    feelsLike: "",
    weather: "",
    weatherIcon: "./src/img/search.svg",
    sunrise: "",
    sunset: "",
    isLiked: false,
  },
  likedCities: []
}

function likedCities(state = [], action){
  switch (action.type) {
    case actions.ADD_CITY:
      return state.concat(action.cityName);

    case actions.REMOVE_CITY:
      return state.filter((city) => city !== action.cityName);
    
    default:
      return state;
  }
}

function weather(state = storeDefault.weather, action){
  switch (action.type) {
    case actions.SET_WEATHER:
      return Object.assign({}, action.weather || state);

    default:
      return state;
  }
}

export const reducer = combineReducers({
  weather,
  likedCities,
})