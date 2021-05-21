import styled from 'styled-components/macro';
import pokeball from '../images/pokeball.svg';
import React, {useEffect, useState, Component} from 'react';
import '../App';

export default function PokemonListe({pokemons, onFilterPokemons}) {
  return (
    <div>
      {pokemons.map((pokemon, index) => (
        <CardWrapper key={index}>
          <button onClick={() => onFilterPokemons(pokemon)}>
            <img src={pokeball} alt="Pokeball" width="30" height="30" />
          </button>
          <h3>
            #{index + 1}{' '}
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h3>
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${
              index + 1
            }.png`}
            width="150"
          />
        </CardWrapper>
      ))}
    </div>
  );
}

const CardWrapper = styled.article`
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  border: 1px solid black;
  border-radius: 1rem;
  box-shadow: 1px 1px 9px #666;
  color: ivory;
  display: inline-block;
  place-items: center;
  gap: 0.5rem;
  padding: 1rem;
  margin: 1rem;
  text-align: center;

  h3 {
    color: var(--primary);
    text-align: center;
  }

  button {
    background-color: transparent;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
  }

  img {
    :hover {
      transform: scale(1.2);
    }
  }
`;
