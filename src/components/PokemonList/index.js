import PropTypes from 'prop-types';
import PokemonCard from 'components/PokemonCard/index.js';
import SkeletonPokemonCard from 'components/SkeletonPokemonCard';
import { useSelector } from 'react-redux';
import './PokemonList.css';

const PokemonList = ({ pokemons }) => {
  const loading = useSelector((state) => state.ui.loading);
  const showSkeleton = loading || !pokemons.length;

  return (
    <div className="pokemon-list">
      {showSkeleton && <SkeletonPokemonCard quantity={8} />}
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.array,
};

export default PokemonList;
