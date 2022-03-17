/* eslint-disable react/prop-types */
import React, { useState } from 'react'

import { weatherNow } from '../../storage';


export function Locations(props) {
  const [likedCities, setLikedCities] = useState(weatherNow.locationList);

  const deleteLocation = function(id){
    const arr = likedCities.filter( (city) => {
      return city.props.id !== id;
    } )
    console.log(arr)
    setLikedCities(
      arr
    )
  }

  const addCityInList = function(city) {
    setLikedCities(
      likedCities.push(<LikedLocation value={city}></LikedLocation>)
    )
  }

  return (
    <div className="locations">
      <div className="block-name">Added locations:</div>
      <div className="locations-list">
        <ul type="none" className="locations-ul">
          {likedLocations}
        </ul>
      </div>
    </div>
  )
}

function LikedLocation(props) {

  const deleteCity = function(){
    props.deleteLocation(props.id);
  }

  return (
    <li>
      <input type="button" className="liked-location" value={props.value} />
      <button className="delete-location" onClick={deleteCity}></button>
    </li>
  )
}