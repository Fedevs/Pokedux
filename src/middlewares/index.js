export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export const CapitalizePokemonName = (store) => (next) => (action) => {
  let updatedAction = { ...action };
  if (action.type === 'data/setPokemons') {
    const capitalizedPokemonName = action.payload.pokemonsList.map(
      (pokemon) => ({
        ...pokemon,
        name: `${pokemon.name[0].toUpperCase()}${pokemon.name.substring(1)}`,
      }),
    );
    updatedAction = {
      ...updatedAction,
      payload: { ...action.payload, pokemonsList: capitalizedPokemonName },
    };
  }
  next(updatedAction);
};
