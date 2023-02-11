import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setLoading } from './uiSlice';
import { getPokemonDetails, getPokemons } from '../../api';
import { setCurrentPage, setTotalPages } from './paginationSlice';

const initialState = { pokemons: {}, favouritePokemons: [], searchText: '' };

export const fetchPokemonWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async ({ generation, page }, { dispatch, getState }) => {
    dispatch(setLoading(true));
    const { resultsPerPage } = getState().pagination;
    const { pokemons, pageInfo } = await getPokemons(
      generation,
      page,
      resultsPerPage,
    );
    const pokemonsDetails = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetails(pokemon)),
    );

    // Data slice
    dispatch(setPokemons({ pokemonsList: pokemonsDetails, generation }));

    // Pagination slice
    dispatch(setCurrentPage(page));
    dispatch(setTotalPages(pageInfo.totalPages));

    //UI slice
    dispatch(setLoading(false));
  },
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      const property = action.payload.generation;
      state.pokemons[property] = action.payload.pokemonsList;
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
