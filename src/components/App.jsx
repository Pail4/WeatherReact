/* eslint-disable react/prop-types */
import '../styles/style.css'
import React, { useState } from 'react'

import { SearchForm } from './search_form/SearchForm'
import { Weather } from './content_blocks/weather/Weather'
import { Locations, LikedLocation } from './content_blocks/locations/Locations'

import { weatherNow } from './storage'
import { getWeather } from './API'
import { getParsedWeather } from './helpers'

function App(){
  const [storage, setStorage] = useState(weatherNow);
  const [likedCities, setLikedCities] = useState([]);
  //let likedCities = storage.likedCities;

  const findCity = function(cityName) {
    setWeather(cityName);
  }

  const setWeather = async function(cityName){
    const _newWeatherNow = await getWeather(cityName, 'weatherNow');
    const newWeatherNow = getParsedWeather(_newWeatherNow, cityName);
    newWeatherNow.likedCities = likedCities.slice();
    
    setStorage(newWeatherNow);
    //const _newForecast = await getWeather(cityName, 'forecast');

  }

  const removeCity = function(name){
    const _likedCities = likedCities.filter( (city) => {
      return city.props.value !== name;
    } );

    setLikedCities(_likedCities);
  }

  const addCity = function(city) {
    const _likedCities = likedCities.slice();
    _likedCities.push(<LikedLocation key={city} value={city} removeCity={removeCity} chooseCity={findCity} ></LikedLocation>);

    setLikedCities(_likedCities);
  }

  return (
    <div className='wrapper'>
      <SearchForm onSubmit={ findCity }></SearchForm>

      <div className="blocks">
        <Weather addCity={addCity} removeCity={removeCity} params={ storage }></Weather>
        <Locations likedCities={likedCities}></Locations>
      </div>
    </div>
  )
}

export default App
