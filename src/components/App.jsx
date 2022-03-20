/* eslint-disable react/prop-types */
import '../styles/style.css'
import React, { useState, useEffect } from 'react'

import { SearchForm } from './search_form/SearchForm'
import { Weather } from './content_blocks/weather/Weather'
import { Locations, LikedLocation } from './content_blocks/locations/Locations'

import { weatherNow } from './storage'
import { getWeather } from './API'
import { getParsedWeather, getForecastList } from './helpers'

function App() {
  const [storage, setStorage] = useState(weatherNow.get(createCity));
  const [forecast, setForecast] = useState([]);

  useEffect(function saveStorage() {
    try {
      const _storage = {};
      Object.assign(_storage, storage);
      _storage.likedCities = _storage.likedCities.map( (city) => {
        return city.props.value;
      } );
      const data = JSON.stringify(_storage);
      localStorage.setItem("storage", data);
    } catch(err){
      console.log(err);
    }
  });

  async function setWeather(cityName) {
    const _newWeatherNow = await getWeather(cityName, 'weatherNow');
    const newWeatherNow = getParsedWeather(_newWeatherNow, cityName);

    setStorage((_storage) => {
      newWeatherNow.likedCities = _storage.likedCities;
      newWeatherNow.isLiked = isCityInList(cityName, _storage.likedCities);
      return newWeatherNow;
    });

    const _newForecast = await getWeather(cityName, 'forecast');
    const newForecast = getForecastList(_newForecast, cityName);
    setForecast(newForecast);
  }

  function isCityInList(cityName, list) {
    return !!list.find((city) => {
      return city.props.value === cityName;
    });
  }

  function handleLikeClick(cityName) {
    if (isCityInList(cityName, storage.likedCities)) {
      removeCity(cityName);
    } else {
      addCity(cityName);
    }
  }

  function removeCity(cityName) {
    setStorage((_storage) => {
      _storage.likedCities = _storage.likedCities.filter((city) => {
        return city.props.value !== cityName;
      });
      const newStorage = {};
      Object.assign(newStorage, _storage);
      return newStorage;
    });
  }

  function addCity(cityName) {
    setStorage((_storage) => {
      const arr = _storage.likedCities.slice();
      arr.push(createCity(cityName));
      const newStorage = {};
      Object.assign(newStorage, _storage)
      newStorage.likedCities = arr;
      newStorage.isLiked = true;
      return newStorage;
    });
  }

  function createCity(cityName) {
    return <LikedLocation key={cityName} value={cityName} removeCity={removeCity} chooseCity={setWeather}></LikedLocation>
  }

  return (
    <div className='wrapper'>
      <SearchForm onSubmit={setWeather}></SearchForm>

      <div className="blocks">
        <Weather params={storage} blockList={forecast} onLikeClick={handleLikeClick} ></Weather>
        <Locations likedCities={storage.likedCities}></Locations>
      </div>
    </div>
  )
}

export default App
