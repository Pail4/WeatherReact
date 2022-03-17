/* eslint-disable react/prop-types */
import React from 'react'

import { WeatherImg, LocationName, Temp } from './elements/elements'

export function TabNow(props) {
  const { isActive, addCity, removeCity, params } = props;
  const { cityName, temperature, weatherIcon, weather } = params;

  const isCityInList = function(){
    return !!params.likedCities.find( (city) => {
      return city.props.value === cityName;
    } )
  }

  const handleLikeClick = function(){
    if ( isCityInList() ){
      removeCity(cityName);
    } else {
      addCity(cityName);
    }
  }

  return isActive ? (
    <div className="tab tab-now active" id="tab01">
        <div className="temperature"><Temp value={temperature}></Temp></div>
        <div className="img-wrap">
            <WeatherImg src={weatherIcon} alt={weather} />
        </div>
        <div className="bottom">
            <LocationName value={cityName}></LocationName>
            <input type="button" name="like" className={"like-btn" + (isCityInList() ? " active" : '')} id="likeBtn" onClick={ handleLikeClick } />
        </div>
    </div>
  ) : null
}
