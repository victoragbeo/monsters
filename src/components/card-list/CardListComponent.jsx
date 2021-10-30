// this CarList component displays the list of monsters on the webpage
import React from "react";

import { Card } from "../card/CardComponent";

import "./card-list.styles.css";

export const CardList = (props) => {
  return (
    <div className='card-list'>
        {props.monsters.map(monster => 
         <Card key={monster.id}  monster={ monster}/>
        )}
    </div>);
};

// we are passing the state monster into the Card Compont 
// which the card component get as 'props' to display