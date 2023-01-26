import PropTypes from 'prop-types';
import PokemonCard from 'components/PokemonCard/index.js';
import SkeletonPokemonCard from 'components/SkeletonPokemonCard';
import { useSelector } from 'react-redux';
import './PokemonList.css';

const PokemonList = ({ pokemons }) => {
  const loading = useSelector((state) => state.ui.loading);

  return (
    <div className="pokemon-list">
      {loading
        ? [...Array(8)].map((_, index) => {
            const key = `skeleton-${index}`;
            return <SkeletonPokemonCard key={key} />;
          })
        : pokemons.map((pokemon) => {
            const sprite =
              pokemon.sprites.other['official-artwork'].front_default;
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

PokemonList.propTypes = {
  pokemons: PropTypes.array,
};

export default PokemonList;
