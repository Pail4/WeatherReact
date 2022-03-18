/* eslint-disable react/prop-types */
import React from 'react'

import { WeatherImg } from './elements/elements'

export function TabForecast(props) {
  const { isActive, cityName, blockList } = props;

  return isActive ? (
    <div className="tab tab-forecast active" id="tab03">
      <div className="location-name">{cityName || 'oaoaoa'}</div>
      <div className="time-block-list">
        {blockList}
      </div>
    </div>
  ) : null;
}

export function TimeBlock(props) {
  const { date, time, params } = props;
  const { weatherIcon, weather, temperature, feelsLike } = params;

  return (
    <div className="time-block">
      <div className="time-block_top">
        <div className="date">{date}</div>
        <div className="time">{time}</div>
      </div>
      <div className="time-block_bot">
        <div className="params">
          <ul type="none">
            <li>Temperature: <span className="temp grad">{temperature}</span></li>
            <li>Feels like: <span className="feels-like grad">{feelsLike}</span></li>
          </ul>
        </div>
        <div className="time-block-weather">
          <div className="time-weather-name">{weather}</div>
          <WeatherImg src={weatherIcon} alt={weather}></WeatherImg>
        </div>
      </div>
    </div>
  );
}