import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setLoading } from './uiSlice';
import { getPokemonDetails, getPokemons } from '../../api';

const initialState = { pokemons: [], searchText: '' };

export const fetchPokemonWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (page, { dispatch }) => {
    dispatch(setLoading(true));
    const pokemons = await getPokemons(page);
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
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { setFavourite, setPokemons, setSearchText } = dataSlice.actions;
export default dataSlice.reducer;
