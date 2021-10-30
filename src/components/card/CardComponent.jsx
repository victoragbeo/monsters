import React from "react";

import './card.styles.css';
// this compnent receives monster as prop to 
// display the name

export const Card = (props) => (
    <div className='card-container'>
        <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
        <h1>{props.monster.name}</h1>
        <h2> {props.monster.email}</h2>
    </div>
);