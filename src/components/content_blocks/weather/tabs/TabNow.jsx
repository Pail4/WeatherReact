/* eslint-disable react/prop-types */
import React from 'react'

import { WeatherImg, LocationName, Temp } from './elements/elements'

export function TabNow(props) {
  const { isActive, params, onLikeClick } = props;
  const { cityName, temperature, weatherIcon, weather } = params;



  return isActive ? (
    <div className="tab tab-now active" id="tab01">
        <div className="temperature"><Temp value={temperature}></Temp></div>
        <div className="img-wrap">
            <WeatherImg src={weatherIcon} alt={weather} />
        </div>
        <div className="bottom">
            <LocationName value={cityName}></LocationName>
            <input type="button" name="like" className={"like-btn" + (true ? " active" : '')} id="likeBtn" onClick={ () => {onLikeClick(cityName)} } />
        </div>
    </div>
  ) : null
}
