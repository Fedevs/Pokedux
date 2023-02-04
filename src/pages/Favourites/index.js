import PokemonList from 'components/PokemonList';
import EmptyState from 'components/EmptyState';
import { useSelector } from 'react-redux';

const Favourites = () => {
  const favouritePokemons = useSelector(
    (state) => state.data.favouritePokemons,
  );
  const searchText = useSelector((state) => state.data.searchText);
  const filteredPokemons = favouritePokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchText),
  );

  return (
    <div className="favourites">
      {favouritePokemons.length ? (
        <PokemonList pokemons={filteredPokemons} />
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default Favourites;
