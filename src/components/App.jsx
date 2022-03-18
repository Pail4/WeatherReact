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
    newWeatherNow.isLiked = isCityInList(cityName);
    
    setStorage(newWeatherNow);
    //const _newForecast = await getWeather(cityName, 'forecast');

  }

  const isCityInList = function(cityName){
    return !!likedCities.find( (city) => {
      return city.props.value === cityName;
    } )
  }

  const handleLikeClick = function(cityName){
    if ( isCityInList(cityName) ){
      removeCity(cityName);
    } else {
      addCity(cityName);
    }
  }

  const removeCity = function(cityName){
    setLikedCities( (_likedCities) => {
      return _likedCities.filter( (city) => {
        return city.props.value !== cityName;
      } );  
    } );
  }

  const addCity = function(cityName) {
    const _likedCities = likedCities.slice();
    _likedCities.push(<LikedLocation key={cityName} value={cityName} removeCity={removeCity} chooseCity={findCity} ></LikedLocation>);

    setLikedCities( (_likedCities) => {
      const arr = _likedCities.slice();
      arr.push(<LikedLocation key={cityName} value={cityName} removeCity={removeCity} chooseCity={findCity} ></LikedLocation>);
      return arr;
    } );
  }

  return (
    <div className='wrapper'>
      <SearchForm onSubmit={ findCity }></SearchForm>

      <div className="blocks">
        <Weather params={ storage } onLikeClick={handleLikeClick} ></Weather>
        <Locations likedCities={likedCities}></Locations>
      </div>
    </div>
  )
}

export default App
