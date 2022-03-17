/* eslint-disable react/prop-types */
import '../styles/style.css'
import React, { useState, useEffect } from 'react'

import { SearchForm } from './search_form/SearchForm'
import { Weather } from './content_blocks/weather/Weather'
import { Locations, LikedLocation } from './content_blocks/locations/Locations'

import { weatherNow } from './storage'

function App(){
  const [weather, setWeather] = useState(weatherNow);
  let likedCities = weather.likedCities;

  const onSearchFormSubmit = function() {

  }


  const removeCity = function(name){
    likedCities = likedCities.filter( (city) => {
      return city.props.value !== name;
    } );
    let newWeather = {};
    Object.assign(newWeather, weather);
    newWeather.likedCities = likedCities;
    setWeather(newWeather);
  }

  const addCity = function(city) {
    likedCities.push(<LikedLocation key={city} value={city} removeCity={removeCity} ></LikedLocation>);
    let newWeather = {};
    Object.assign(newWeather, weather);
    newWeather.likedCities = likedCities;
    setWeather(newWeather);
  }

  return (
    <div className='wrapper'>
      <SearchForm onSubmit={ onSearchFormSubmit }></SearchForm>

      <div className="blocks">
        <Weather addCity={addCity} removeCity={removeCity} params={ weather }></Weather>
        <Locations likedCities={likedCities}></Locations>
      </div>
    </div>
  )
}

export default App
