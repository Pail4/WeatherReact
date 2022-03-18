import React from 'react'
import { getWeatherIcon } from "./API";
import { TimeBlock } from "./content_blocks/weather/tabs/TabForecast";

export function getParsedWeather(fromObj, cityName) {
  const targetObj = {};
  targetObj.cityName = cityName;
  targetObj.temperature = Math.round(fromObj.main.temp);
  targetObj.feelsLike = Math.round(fromObj.main["feels_like"]);
  targetObj.weather = fromObj.weather[0].main;
  targetObj.sunrise = parseTime(fromObj.sys.sunrise);
  targetObj.sunset = parseTime(fromObj.sys.sunset);
  const iconCode = fromObj.weather[0].icon;
  targetObj.weatherIcon = getWeatherIcon(iconCode);

  return targetObj;
}

export function getForecastList(forecast, cityName) {
  const blocks = [];
  forecast.list.forEach((item) => {
    const date = parseDate(item["dt"]);
    const time = parseTime(item["dt"]);
    const weather = getParsedWeather(item, cityName);
    blocks.push( 
      <TimeBlock key={date + ' ' + time} date={date} time={time} params={weather} ></TimeBlock>
    );
  });
  return blocks;
}

function parseTime(timeUNIX) {
  if (!timeUNIX) return undefined;

  let date = new Date(timeUNIX * 1000);

  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  return hours + ':' + minutes.slice(-2);
}

function parseDate(timeUNIX) {
  let date = new Date(timeUNIX * 1000);

  return date.getDate() + ' ' + date.toLocaleString('en', { month: 'short' });
}