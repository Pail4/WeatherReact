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

  const deleteCity = function(){
    props.removeCity(props.value);
  }

  return (
    <li>
      <input type="button" className="liked-location" value={props.value} />
      <button className="delete-location" onClick={deleteCity}></button>
    </li>
  )
}