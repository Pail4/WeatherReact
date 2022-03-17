import React, {useState, useEffect} from 'react'

import { WeatherImg, LocationName, Temp } from './elements/elements'
import { weatherNow } from '../../../storage';

export function TabNow(props) {
  const { isActive } = props;
  

  return isActive ? (
    <div className="tab tab-now active" id="tab01">
        <div className="temperature"><Temp></Temp></div>
        <div className="img-wrap">
            <WeatherImg src="src/img/search.svg" alt="choose city..." />
        </div>
        <div className="bottom">
            <LocationName value=""></LocationName>
            <input type="button" name="like" className="like-btn active" id="likeBtn" onClick={  }/>
        </div>
    </div>
  ) : null
}
