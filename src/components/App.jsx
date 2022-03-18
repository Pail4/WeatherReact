/* eslint-disable react/prop-types */
import '../styles/style.css'
import React, { useState } from 'react'

import { SearchForm } from './search_form/SearchForm'
import { Weather } from './content_blocks/weather/Weather'
import { Locations, LikedLocation } from './content_blocks/locations/Locations'

import { weatherNow } from './storage'
import { getWeather } from './API'
import { getParsedWeather } from './helpers'

function App() {
  const [storage, setStorage] = useState(weatherNow);
  //let likedCities = storage.likedCities;

  const findCity = function (cityName) {
    setWeather(cityName);
  }

  const setWeather = async function (cityName) {
    const _newWeatherNow = await getWeather(cityName, 'weatherNow');
    const newWeatherNow = getParsedWeather(_newWeatherNow, cityName);

    setStorage((_storage) => {
      newWeatherNow.likedCities = _storage.likedCities;
      newWeatherNow.isLiked = isCityInList(cityName, _storage.likedCities);
      return newWeatherNow;
    });
  }

  const isCityInList = function (cityName, list) {
    return !!list.find((city) => {
      return city.props.value === cityName;
    });
  }

  const handleLikeClick = function (cityName) {
    if (isCityInList(cityName, storage.likedCities)) {
      removeCity(cityName);
    } else {
      addCity(cityName);
    }
  }

  const removeCity = function (cityName) {
    setStorage((_storage) => {
      _storage.likedCities = _storage.likedCities.filter((city) => {
        return city.props.value !== cityName;
      });
      const newStorage = {};
      Object.assign(newStorage, _storage);
      return newStorage;
    });
  }

  const addCity = function (cityName) {
    setStorage((_storage) => {
      const arr = _storage.likedCities.slice();
      arr.push(<LikedLocation key={cityName} value={cityName} removeCity={removeCity} chooseCity={findCity}></LikedLocation>);
      const newStorage = {};
      Object.assign(newStorage, _storage)
      newStorage.likedCities = arr;
      newStorage.isLiked = true;
      return newStorage;
    });
  }

  return (
    <div className='wrapper'>
      <SearchForm onSubmit={findCity}></SearchForm>

      <div className="blocks">
        <Weather params={storage} onLikeClick={handleLikeClick} ></Weather>
        <Locations likedCities={storage.likedCities}></Locations>
      </div>
    </div>
  )
}

export default App
