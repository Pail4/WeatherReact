/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector } from 'react-redux';

import { WeatherImg } from './elements/elements'

export function TabForecast(props) {
  const { isActive } = props;
  const forecast = useSelector(state => state.forecast);
  const cityName = useSelector(state => state.weather.cityName);

  function createCityList(forecast){
    if (!forecast)
      return null;
    return forecast.map( params => {
      const { date, time, weather } = params;
      return <TimeBlock key={date + ' ' + time} date={date} time={time} params={weather} ></TimeBlock>
    } )
  }

  const blockList = createCityList(forecast);

  return isActive ? (
    <div className="tab tab-forecast active" id="tab03">
      <div className="location-name">{cityName}</div>
      <div className="time-block-list">
        {blockList}
      </div>
    </div>
  ) : null;
}

function TimeBlock(props) {
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