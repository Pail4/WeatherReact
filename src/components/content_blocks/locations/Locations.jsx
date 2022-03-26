/* eslint-disable react/prop-types */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../../store/actions';
import { setAllWeather } from '../../helpers';


export function Locations() {
  const likedCities = useSelector(state => state.likedCities);

  function createCityList(list){
    return list.map(createCity);
  }

  function createCity(cityName) {
    return <LikedLocation key={cityName} value={cityName} ></LikedLocation>
  }

  return (
    <div className="locations">
      <div className="block-name">Added locations:</div>
      <div className="locations-list">
        <ul type="none" className="locations-ul">
          {createCityList(likedCities)}
        </ul>
      </div>
    </div>
  )
}

function LikedLocation(props) {
  const { value } = props;
  const dispatch = useDispatch();

  
  const deleteCity = function(){
    dispatch(actions.removeCity(value));
  }

  const handleCityClick = function() {
    setAllWeather(value)
  }

  return (
    <li>
      <input type="button" className="liked-location" value={value} onClick={handleCityClick} />
      <button className="delete-location" onClick={deleteCity}></button>
    </li>
  )
}