/* eslint-disable react/prop-types */
import '../styles/style.css'
import React, { useState, useEffect } from 'react'

import { SearchForm } from './search_form/SearchForm'
import { Weather } from './content_blocks/weather/Weather'
import { Locations } from './content_blocks/locations/Locations'

function App(){

  const onSearchFormSubmit = function() {

  }

  const addCityInList = function() {

  }

  return (
    <div className='wrapper'>
      <SearchForm onSubmit={ onSearchFormSubmit }></SearchForm>

      <div className="blocks">
        <Weather ></Weather>
        <Locations addCity={addCityInList} ></Locations>
      </div>
    </div>
  )
}

export default App
