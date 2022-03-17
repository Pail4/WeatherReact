/* eslint-disable react/prop-types */
import React, { useState } from "react";

export function SearchForm(props) {
  const [inputValue, setInputValue] = useState('');

  return (
    <form action="" onSubmit={props.onSubmit} className="search">
      <SearchInput value={ inputValue } onChange={ setInputValue } ></SearchInput> 
    </form>
  )
}

function SearchInput(props) {
  const { value, onChange } = props;
  return (
    <input className="search-input" type="text" placeholder="Which city?" onChange={onChange} value={ value }></input>
  )
}