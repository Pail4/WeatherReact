/* eslint-disable react/prop-types */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../../store/actions';

import { WeatherImg, LocationName, Temp } from './elements/elements'

export function TabNow(props) {
  const { isActive } = props;
  const Weather = useSelector(state => state.weather);
  const { cityName, temperature, weatherIcon, weather, isLiked } = Weather;

  const dispatch = useDispatch();

  function handleLikeClick(){
    const action = isLiked ? actions.removeCity : actions.addCity;
    dispatch(action(cityName));
    const newWeather = Object.assign({}, Weather);
    newWeather.isLiked = !newWeather.isLiked;
    dispatch(actions.setWeather( newWeather ));
  }

  return isActive ? (
    <div className="tab tab-now active" id="tab01">
        <div className="temperature"><Temp value={temperature}></Temp></div>
        <div className="img-wrap">
            <WeatherImg src={weatherIcon} alt={weather} />
        </div>
        <div className="bottom">
            <LocationName value={cityName}></LocationName>
            <input type="button" name="like" className={"like-btn" + " active".repeat(isLiked)} id="likeBtn" onClick={ handleLikeClick } />
        </div>
    </div>
  ) : null
}
