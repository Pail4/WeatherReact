/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'

import { ParamsList, WeatherImg } from './elements/elements'

export function TabForecast(props) {
  const { isActive } = props;
  const timeBlockList = [<TimeBlock key="1"></TimeBlock>]

  return isActive ? (
    <div className="tab tab-forecast active" id="tab03">
      <div className="location-name"></div>
      <div className="time-block-list">
        {timeBlockList}
      </div>
    </div>
  ) : null;
}

function TimeBlock(props) {
  const { date, time, params, weather } = props;
  
  return (
    <div className="time-block">
      <div className="time-block_top">
        <div className="date"></div>
        <div className="time"></div>
      </div>
      <div className="time-block_bot">
        <div className="params">
          <ParamsList show={ props.params } ulClass='' ></ParamsList>
        </div>
        <div className="time-block-weather">
          <div className="time-weather-name"></div>
          <WeatherImg></WeatherImg>
        </div>
      </div>
    </div>
  );
}