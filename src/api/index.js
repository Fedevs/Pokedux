const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

export const getPokemons = async () => {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let { results } = await response.json();
    return results;
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonDetails = async (pokemon) => {
  try {
    const response = await fetch(pokemon.url, {
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
