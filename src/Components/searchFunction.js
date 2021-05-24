

export function filterListOfPokemons(event, pokemons, setPokemons) {
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

export function resetState(event, puffer, setPokemons) {
    if (event.key === 'Backspace') {
      setPokemons(puffer);
    }
  }


