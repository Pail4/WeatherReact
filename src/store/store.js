import { createStore } from 'redux'
import { setAllWeather } from '../components/helpers';
import * as actions from './actions';

import { reducer } from './reducers'

const defaultCity = 'Perm'

export const store = createStore(reducer);

function getStorage(){
  try {
    let data = localStorage.getItem('storage');
    if (!data)
      setAllWeather(defaultCity);
    data = JSON.parse(data);
    store.dispatch(actions.setWeather(data.weather))
    data.likedCities.forEach(city => {
      store.dispatch(actions.addCity(city))
    });
  } catch (error) {
    console.log(error)
  }
}

getStorage();