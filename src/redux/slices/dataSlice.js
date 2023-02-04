import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setLoading } from './uiSlice';
import { getPokemonDetails, getPokemons } from '../../api';

const initialState = { pokemons: [], favouritePokemons: [], searchText: '' };

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

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavourite: (state, action) => {
      state.favouritePokemons = [...state.favouritePokemons, action.payload];
    },
    deleteFavourite: (state, action) => {
      state.favouritePokemons = state.favouritePokemons.filter(
        (favouritePokemon) => {
          return favouritePokemon.id !== action.payload.id;
        },
      );
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { setPokemons, setFavourite, deleteFavourite, setSearchText } =
  dataSlice.actions;
export default dataSlice.reducer;
