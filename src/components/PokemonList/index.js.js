import PokemonCard from '../index.js/PokemonCard';
import './PokemonList.css';

const PokemonList = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <div className='PokemonList'>
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
          />
        );
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
};

export default PokemonList;
