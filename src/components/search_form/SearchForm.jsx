/* eslint-disable react/prop-types */
import React, { useState } from "react";

export function SearchForm(props) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = function(event) {
    event.preventDefault();
    props.onSubmit(inputValue);
    setInputValue('');
  }

  return (
    <form action="" onSubmit={handleSubmit} className="search">
      <SearchInput value={ inputValue } onChange={ (e) => { setInputValue(e.target.value) } } ></SearchInput> 
    </form>
  )
}

function SearchInput(props) {
  const { value, onChange } = props;
  return (
    <input className="search-input" type="text" placeholder="Which city?" onChange={onChange} value={ value }></input>
  )
}