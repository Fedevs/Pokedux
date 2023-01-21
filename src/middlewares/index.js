export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export const CapitalizePokemonName = (store) => (next) => (action) => {
  let updatedAction = { ...action };
  if (action.type === 'data/setPokemons') {
    const capitalizedPokemonName = action.payload.map((pokemon) => ({
      ...pokemon,
      name: `${pokemon.name[0].toUpperCase()}${pokemon.name.substring(1)}`,
    }));
    updatedAction = {
      ...updatedAction,
      payload: capitalizedPokemonName,
    };
  }
  next(updatedAction);
};
