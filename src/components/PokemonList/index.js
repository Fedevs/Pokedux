import PropTypes from 'prop-types';
import PokemonCard from 'components/PokemonCard/index.js';
import './PokemonList.css';

const PokemonList = ({ pokemons }) => {
  return (
    <div className="pokemon-list">
      {pokemons?.map((pokemon) => {
        const sprite = pokemon.sprites.other['official-artwork'].front_default;
        return (
          <PokemonCard
            key={pokemon.name}
            id={pokemon.id}
            name={pokemon.name}
            url={sprite}
            isFavourite={pokemon.isFavourite}
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
