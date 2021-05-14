import styled from 'styled-components/macro';
import React, { useEffect, useState } from "react";
import Pokeball from '../src/images/pokeball.svg';

import Home from './Home';

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [activePage, setActivePage] = useState("PokemonList");
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const Home = () => <h2>Home</h2>;
  const PokemonList = () => <h2>Pokemon Liste</h2>;

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((result) => result.json())
    .then((data) => setPokemons(data.results));
  }, []);

  function filterPokemons(filteredItems) {
      const newList = pokemons.filter((pokemon) => pokemon.name !== filteredItems.name)
      setFilteredPokemons(newList)
      //console.log(newList)
  }

  return <div>
    <Headline> Pokemon React App</Headline>
    <Button onClick={() => setActivePage("Home")}>Home</Button>
    <Button onClick={() => setActivePage("PokemonList")}>Pokemon Liste</Button>
       {activePage === "Home" ? (
          <Home />
       ) : (
       <>
        <PokemonList />
          {pokemons.map((pokemon, index) => (
     
        <CardWrapper key={index}>
          
          <button onClick={() => filterPokemons(pokemon)}>
            <img src={Pokeball} alt="Pokeball" width="30" height="30" /></button>
          <h3>#{index+1} {pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</h3>
         <img src={`https://pokeres.bastionbot.org/images/pokemon/${index+1}.png`} width="150"/>
        </CardWrapper>
      ))}  </>
    )}
    
    

  </div>;
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

const CardWrapper = styled.article`
  background-image:linear-gradient(120deg, #f6d365 0%, #fda085 100%);
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
  };

  button {
  background-color: transparent;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  };
`;

const Button = styled.button`
  background-image: linear-gradient(#ff0f7b, #f89b29);
  border-radius: 2rem;
  color: ivory;
  font-weight: bold;
  margin: 1rem;
  padding: 0.5rem 0.8rem;
`;


