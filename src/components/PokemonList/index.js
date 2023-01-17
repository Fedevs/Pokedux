import PokemonCard from '../PokemonCard/index.js';
import './PokemonList.css';

const PokemonList = ({ pokemons }) => {
  const asd = 123;
  return (
    <div className="PokemonList">
      {pokemons?.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.sprites.front_default}
            types={pokemon.types}
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
