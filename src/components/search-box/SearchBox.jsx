import React from 'react';

import './search-box.css';
// destructurin placehold n handleChange use as props
export const SearchBox = ({placeholder, handleChange}) => (
    <input 
        className= 'search'
        type='search' 
        placeholder= {placeholder}
// onChange is a Async funct that creates synthetic event in react.  allows u to track the targetted value and set it to the state
        onChange={handleChange }
        />
)