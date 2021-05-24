import styled from 'styled-components/macro';
import React, {useEffect, useState, Component} from 'react';
import Favorites from './pages/Favorites';
import PokemonListe from './pages/PokemonListe';
import {Switch, Route} from 'react-router-dom';
import HeaderNavigation from './HeaderNavigation';
import Home from './pages/Home';
import {saveToLocal, loadFromLocal} from './lib/localStorage';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [list, setList] = useState([]);
  const [puffer, setPuffer] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState(
    loadFromLocal('filteredPokemons') ?? []
  );

  useEffect(() => {
    saveToLocal('filteredPokemons', filteredPokemons);
  }, [filteredPokemons]);

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

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((result) => result.json())
      .then((data) =>
        setPuffer(
          data.results.map((item, index) => {
            item.id = index + 1;
            return item;
          })
        )
      );
  }, []);

  function filterListOfPokemons(event) {
    const fieldInput = event.target.value;
    const newList = pokemons
      .slice()
      .filter(
        (pokemon) =>
          pokemon.name.slice(0, fieldInput.length).toUpperCase() ===
          fieldInput.toUpperCase()
      );
    setPokemons(newList);
  }

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
  function resetState(event) {
    if (event.key === 'Backspace') {
      setPokemons(puffer);
    }
  }
  return (
    <div>
      <Headline> Pokemon React App</Headline>
      <HeaderNavigation />
      <main>
        <Switch>
          <Route exact path="/">
            <div>
              <Home />
            </div>
          </Route>

          <Route path="/pokemon-list">
            <div>
              <label>
              <Input
                placeholder="Type in your Pokemon"
                type="text"
                name="name"
                onChange={filterListOfPokemons}
                onKeyDown={resetState}
              />
              </label>
              <PokemonListe
                pokemons={pokemons}
                onFilterPokemons={filterPokemons}
              />
            </div>
          </Route>

          <Route path="/favorites">
            <div>
              <Favorites
                filteredPokemons={filteredPokemons}
                onRemoveFromFavorites={removeFromFavorites}
              />
            </div>
          </Route>
        </Switch>
      </main>
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


const Input = styled.input`
  border-radius: 2rem;
  color: #ff0f7b;
  font-size: 16px;
  margin: 1rem;
  padding: 0.5rem 0.8rem;
`;
