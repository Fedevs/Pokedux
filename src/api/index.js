const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

export const getPokemons = async () => {
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
