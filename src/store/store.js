import { createStore } from 'redux'

import { reducer } from './reducers'
//import * as actions from './actions' 

export const store = createStore(reducer);

// console.log(store.getState());

// store.subscribe( () => console.log(store.getState() ) );

// store.dispatch(actions.addCity('Perm'));
// store.dispatch(actions.addCity('Votkinsk'));
// store.dispatch(actions.removeCity('Votkinsk'));
// store.dispatch(actions.setWeather(
//   {
//     cityName: "Perm",
//     temperature: "12",
//     feelsLike: "12",
//     weather: "nice",
//     weatherIcon: "./src/img/search.svg",
//     sunrise: "12",
//     sunset: "12",
//     isLiked: false,
//   }
// ))
