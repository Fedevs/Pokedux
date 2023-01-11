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
    const { results } = await response.json();
    return results;
  } catch (error) {
    console.log(error);
  }
};
