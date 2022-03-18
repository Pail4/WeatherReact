/* eslint-disable react/prop-types */
import React from 'react'

export function ParamsList(props) {
  const { show, ulClass } = props;
  

  return (
    <ul className={ulClass} type='none'>
      {show?.temperature != undefined && <li>Temperature: <span className="temp grad">{show.temperature}</span></li>}
      {show?.feelsLike != undefined && <li>Feels like: <span className="feels-like grad">{show.feelsLike}</span></li>}
      {show?.weather != undefined && <li>Weather: <span className="cur-weather"></span>{show.weather}</li>}
      {show?.sunrise != undefined && <li>Sunrise: <span className="sunrise"></span>{show.sunrise}</li>}
      {show?.sunset != undefined && <li>Sunset: <span className="sunset">{show.sunset}</span></li>}
    </ul>
  )
}

export function WeatherImg(props) {
  const { src, alt } = props;
  return (
    <img className="weather-img" src={src} alt={alt} />
  )
}

export function LocationName(props) {

  return (
    <div className="location-name">{props.value}</div>
  )
}

export function Temp(props) {

  return (
    <span className="temp grad">{props.value}</span>
  )
}