/* eslint-disable react/prop-types */
import '../styles/style.css'
import React, { useEffect } from 'react'

import { SearchForm } from './search_form/SearchForm'
import { Weather } from './content_blocks/weather/Weather'
import { Locations } from './content_blocks/locations/Locations'

import { useSelector } from 'react-redux'


function App() {
  const storage = useSelector(state => state);

  useEffect(function saveStorage() {
    try {
      const _storage = {};
      Object.assign(_storage, storage);
      const data = JSON.stringify(_storage);
      localStorage.setItem("storage", data);
    } catch(err){
      console.log(err);
    }
  });

  
  return (
    <div className='wrapper'>
      <SearchForm></SearchForm>

      <div className="blocks">
        <Weather></Weather>
        <Locations></Locations>
      </div>
    </div>
  )
}

export default App
