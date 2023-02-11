import { pokemonGenerations } from 'constants/pokemonPerGeneration';

export const getPokemons = async (generation, currentPage, resultsPerPage) => {
  const pageInfo = getPageInformation(generation, resultsPerPage);
  const API_URL = `https://pokeapi.co/api/v2/pokemon?offset=${
    pageInfo.offset
  }&limit=${resultsPerPage * currentPage}`;
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

const getPageInformation = (generation, resultsPerPage) => {
  const data = pokemonGenerations.find(
    (pokemonGeneration) => pokemonGeneration.id === generation,
  );
  const pageInformation = {
    totalPages: Math.ceil(data.pokemonsCounter / resultsPerPage),
    offset: data.offset,
  };
  return pageInformation;
};
