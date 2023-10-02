import React from 'react'
import Pokedexlist from './Pokedex';
import './Pokecard.css'



const POKE_API = 'https://raw.githubusercontent.com/' +
  'PokeAPI/sprites/master/sprites/pokemon/';

function imgSrc(id) {
    return `${POKE_API}${id}.png`;
  }

function Pokecard() {
    
    return (
      <div>
        {Pokedexlist.map(i => (
          <div id='pokecard'>
            <h4 id='pokename'>{i.name}</h4>
            <img src={imgSrc(i.id)}></img>
            <h4>Type: {i.type}</h4>
            <h4>Exp: {i.base_experience}</h4>
         </div>
        ))}
      </div>
    )
  }

export default Pokecard;