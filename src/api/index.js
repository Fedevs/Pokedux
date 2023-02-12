import { pokemonGenerations } from 'constants/pokemonPerGeneration';

export const getPokemons = async (generation, currentPage, resultsPerPage) => {
  const pageInfo = getPageInformation(generation, currentPage, resultsPerPage);
  const API_URL = `https://pokeapi.co/api/v2/pokemon?offset=${pageInfo.offset}&limit=${pageInfo.limit}`;
  try {
    const response = await fetch(API_URL);
    if (response.ok) {
      let { results } = await response.json();
      return { pokemons: results, pageInfo };
    }
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonDetails = async (pokemon) => {
  try {
    const response = await fetch(pokemon.url);
    if (response.ok) {
      let result = await response.json();
      return result;
    }
  } catch (error) {
    console.log(error);
  }
};

const getPageInformation = (generation, currentPage, resultsPerPage) => {
  const data = pokemonGenerations.find(
    (pokemonGeneration) => pokemonGeneration.id === generation,
  );
  const previousPage = currentPage - 1;
  const offset = data.offset + previousPage * resultsPerPage;
  const maxOffset = data.offset + data.pokemonsCounter;
  const lastPageLimit = data.pokemonsCounter - resultsPerPage * previousPage;

  const pageInformation = {
    totalPages: Math.ceil(data.pokemonsCounter / resultsPerPage),
    offset: Math.min(offset, maxOffset),
    limit: Math.min(resultsPerPage, lastPageLimit),
  };
  return pageInformation;
};
