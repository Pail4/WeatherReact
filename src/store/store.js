import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import * as actions from './actions';
import { reducer } from './reducers'

const defaultCity = 'Perm'

export const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

function getStorage() {
  try {
    let data = localStorage.getItem('storage');
    if (!data)
      store.dispatch(
        actions.fetchData(defaultCity)
      );
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