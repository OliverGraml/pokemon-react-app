 /*   function renderNewPokemon() {
    return filteredPokemons.map((pokemon, index) => (
      <CardWrapper key={index}>
        <button onClick={() => filterPokemons(pokemon)}>
          <img src={Pokeball} alt="Pokeball" width="30" height="30" />
        </button>
        <h3>
          #{index + 1}{' '}
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </h3>
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`}
          width="150"
        />
      </CardWrapper>
    ));
  } */

  /* function changeUrl(pokemon, index) {
    let count = index + 1;
    pokemon.url = count;
    console.log(typeof count);
  } */