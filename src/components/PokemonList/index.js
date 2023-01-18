import PropTypes from 'prop-types';
import PokemonCard from '../PokemonCard/index.js';
import './PokemonList.css';

const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons?.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.name}
            id={pokemon.id}
            name={pokemon.name}
            url={pokemon.sprites.front_default}
            types={pokemon.types}
            isFavorite={pokemon.isFavorite}
          />
        );
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill({ name: '', url: '', image: '' }),
};

PokemonList.propTypes = {
  pokemons: PropTypes.array,
};

export default PokemonList;
