/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector } from 'react-redux';

import { ParamsList, LocationName } from './elements/elements'

export function TabDetails(props) {
  const { isActive } = props;
  const weather = useSelector(state => state.weather);
  
  return isActive ? (
    <div className="tab tab-details active" id="tab02">
      <LocationName value={weather.cityName}></LocationName>
      <ParamsList show={weather} ulClass="details-list"></ParamsList>
    </div>
  ) : null
}