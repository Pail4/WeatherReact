/* eslint-disable react/prop-types */
import React from 'react'



export function Locations(props) {

  const { likedCities } = props;

  return (
    <div className="locations">
      <div className="block-name">Added locations:</div>
      <div className="locations-list">
        <ul type="none" className="locations-ul">
          {likedCities}
        </ul>
      </div>
    </div>
  )
}

export function LikedLocation(props) {
  const { value, removeCity, chooseCity } = props
  
  const deleteCity = function(){
    removeCity(value);
  }

  const handleCityClick = function() {
    chooseCity(value);
  }

  return (
    <li>
      <input type="button" className="liked-location" value={value} onClick={handleCityClick} />
      <button className="delete-location" onClick={deleteCity}></button>
    </li>
  )
}