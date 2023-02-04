export {
  default as dataReducer,
  setPokemons,
  setFavourite,
  deleteFavourite,
  setSearchText,
  fetchPokemonWithDetails,
} from './dataSlice';
export { default as uiReducer, setLoading } from './uiSlice';
export { default as paginationReducer, setPage } from './paginationSlice';
