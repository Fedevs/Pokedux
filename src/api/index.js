export const getPokemons = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((res) => res.json())
    .then((res) => res.results)
    .catch((error) => console.log(error));
};
