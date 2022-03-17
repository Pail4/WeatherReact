/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'

import { ParamsList, LocationName } from './elements/elements'

export function TabDetails(props) {
  const { isActive, params } = props;
  
  return isActive ? (
    <div className="tab tab-details active" id="tab02">
      <LocationName value={params.cityName}></LocationName>
      <ParamsList show={params} ulClass="details-list"></ParamsList>
    </div>
  ) : null
}