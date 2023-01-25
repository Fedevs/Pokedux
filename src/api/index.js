import { pokemonGenerations } from 'constants/pokemonPerGeneration';

export const getPokemons = async (page) => {
  const { offset, limit } = pokemonGenerations.find(
    (generation) => generation.id === page,
  );
  const API_URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}}`;
  try {
    const response = await fetch(API_URL);
    if (response.ok) {
      let { results } = await response.json();
      return results;
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
