import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setLoading } from './uiSlice';
import { getPokemonDetails, getPokemons } from '../../api';

const initialState = { pokemons: [] };

export const fetchPokemonWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const pokemons = await getPokemons();
    const pokemonsDetails = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetails(pokemon)),
    );
    dispatch(setPokemons(pokemonsDetails));
    dispatch(setLoading(false));
  },
);

const findFavouritePokemonByIndex = (pokemons, index) => {
  const currentIndex = pokemons.findIndex((pokemon) => pokemon.id === index);
  return currentIndex;
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavourite: (state, action) => {
      const currentIndex = findFavouritePokemonByIndex(
        state.pokemons,
        action.payload.pokemonID,
      );
      if (currentIndex >= 0) {
        state.pokemons[currentIndex].isFavourite =
          !state.pokemons[currentIndex].isFavourite;
      }
    },
  },
});

export const { setFavourite, setPokemons } = dataSlice.actions;
export default dataSlice.reducer;
