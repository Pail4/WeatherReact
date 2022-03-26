/* eslint-disable react/prop-types */
import React, {useState} from 'react'

import { TabNow } from './tabs/TabNow'
import { TabDetails } from './tabs/TabDetails'
import { TabForecast } from './tabs/TabForecast'
import { TabsNav } from './tabs/TabsNav'

export function Weather() {
  const [selectedTab, setSelectedTab] = useState([true, false, false]);

  const changeTab = function(number) {
    
    let select = [false, false, false];
    select[number] = true;
    setSelectedTab(select);
  }

  return (
    <div className="weather">
      <TabNow isActive={ selectedTab[0] } ></TabNow>
      <TabDetails isActive={ selectedTab[1] } ></TabDetails>
      <TabForecast isActive={ selectedTab[2] } ></TabForecast>
      <TabsNav changeTab={changeTab} selectedTab={ selectedTab } ></TabsNav>
    </div>
  )
}