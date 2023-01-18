import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from '../actions/types';

const initialState = {
  pokemons: [],
  loading: false,
};

const findFavouritePokemonByIndex = (pokemons, index) => {
  const currentIndex = pokemons.findIndex((pokemon) => pokemon.id === index);
  return currentIndex;
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case SET_FAVORITE: {
      const newPokemonsList = [...state.pokemons];
      const currentIndex = findFavouritePokemonByIndex(
        newPokemonsList,
        action.payload.pokemonID,
      );
      if (currentIndex < 0) return state;
      newPokemonsList[currentIndex].isFavorite =
        !newPokemonsList[currentIndex].isFavorite;
      return { ...state, pokemons: newPokemonsList };
    }
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
