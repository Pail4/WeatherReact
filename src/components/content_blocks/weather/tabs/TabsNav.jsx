/* eslint-disable react/prop-types */
import React from 'react'

export function TabsNav(props) {

  const { changeTab, selectedTab } = props;

  return (
    <nav className="tab-nav">
      <button className={"now-btn " + (selectedTab[0] && 'active')} data-tab="NOW" onClick={ () => {changeTab(0)} }>Now</button>
      <button className={"details-btn " + (selectedTab[1] && 'active')} data-tab="DETAILS" onClick={ () => {changeTab(1)} }>Details</button>
      <button className={"forecast-btn " + (selectedTab[2] && 'active')} data-tab="FORECAST" onClick={ () => {changeTab(2)} }>Forecast</button>
    </nav>
  )
}