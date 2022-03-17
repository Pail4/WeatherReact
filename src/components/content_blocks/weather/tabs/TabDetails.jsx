/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'

import { ParamsList, LocationName } from './elements/elements'

const temp = 12;
const feelsLike = 13;
const weather = 'snow';
const sunrise = '12:11';
const sunset = '18:45'

export function TabDetails(props) {


  const { isActive } = props;
  
  return isActive ? (
    <div className="tab tab-details active" id="tab02">
      <LocationName value="Perm"></LocationName>
      <ParamsList show={props.params} ulClass="details-list"></ParamsList>
    </div>
  ) : null
}