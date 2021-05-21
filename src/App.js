import styled from 'styled-components/macro';
import React, {useEffect, useState, Component} from 'react';
import Favorites from './Favorites';
import PokemonListe from './PokemonListe';
//import HomePage from './Home';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((result) => result.json())
      .then((data) =>
        setPokemons(
          data.results.map((item, index) => {
            item.id = index + 1;
            return item;
          })
        )
      );
  }, []);

  function filterPokemons(filteredItems) {
    const newList = pokemons.find(
      (pokemon) => pokemon.name === filteredItems.name
    );
    setFilteredPokemons([newList, ...filteredPokemons]);
  }

  function removeFromFavorites(newPokemon) {
    const newList = filteredPokemons.filter(
      (pokemon) => pokemon.id !== newPokemon.id
    );

    setFilteredPokemons(newList);
  }

  return (
    <div>
      <Headline> Pokemon React App</Headline>
      <>
        <Favorites
          filteredPokemons={filteredPokemons}
          onRemoveFromFavorites={() => removeFromFavorites()}
        />
      </>
      <>
        <PokemonListe
          pokemons={pokemons}
          onFilterPokemons={() => filterPokemons()}
        />
      </>
    </div>
  );
}

export default App;

const Headline = styled.h1`
  background-image: linear-gradient(#ff0f7b, #f89b29);
  color: var(--primary);
  text-align: center;
  margin: 1rem;
  padding: 1rem;
  border-radius: 3rem;
`;

const Headline2 = styled.h2`
  color: #333;
  font-family: fantasy;
  text-align: center;
`;

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

const Button = styled.button`
  background-image: linear-gradient(#ff0f7b, #f89b29);
  border-radius: 2rem;
  color: ivory;
  font-weight: bold;
  margin: 1rem;
  padding: 0.5rem 0.8rem;
`;
