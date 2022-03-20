/* eslint-disable react/prop-types */
import React, { useState } from "react";

export function SearchForm(props) {
  const [inputValue, setInputValue] = useState('');
  const [typeError, setTypeError] = useState(false);

  const handleSubmit = function(event) {
    event.preventDefault();
    if (inputValue.trim()){
      props.onSubmit(inputValue);
    } else {
      setTypeError(true);
      setTimeout( () => setTypeError(false), 1000 );
    }
    
    setInputValue('');
  }

  return (
    <form action="" onSubmit={handleSubmit} className="search">
      <SearchInput value={ inputValue } onChange={ (e) => { setInputValue(e.target.value) } } showError={typeError} ></SearchInput> 
    </form>
  )
}

function SearchInput(props) {
  const { value, onChange, showError } = props;
  return (
    <input className={"search-input" + ' error'.repeat(showError)} type="text" placeholder="Which city?" onChange={onChange} value={ value }></input>
  )
}