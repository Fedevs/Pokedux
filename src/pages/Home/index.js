import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import PokemonList from 'components/PokemonList';

import EmptyState from 'components/EmptyState';
import GenerationCard from 'components/GenerationCard';

import { fetchPokemonWithDetails, setPage, setSearchText } from '../../redux';
import { pokemonGenerations } from 'constants/pokemonPerGeneration';

import './Home.css';

const Home = () => {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const page = useSelector((state) => state.pagination.page);
  const searchText = useSelector((state) => state.data.searchText);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  let filteredPokemons =
    pokemons[page]?.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchText),
    ) || [];

  useEffect(() => {
    cacheOrFetch();
  }, [page]);

  /**
   * Decide whether using cache or fetching new data to display pokemons
   */
  const cacheOrFetch = () => {
    if (pokemons[page]?.length) {
      filteredPokemons = pokemons[page];
    } else {
      dispatch(fetchPokemonWithDetails(page));
    }
  };

  const handleGenerationCardClick = (id, evt) => {
    evt.target.scrollIntoView();
    searchText && emptySearchText();
    page !== id && dispatch(setPage(id));
  };

  const emptySearchText = () => {
    dispatch(setSearchText(''));
  };

  return (
    <div className="home">
      <div className="generation-card-container">
        {pokemonGenerations.map((generation) => {
          return (
            <GenerationCard
              key={generation.id}
              id={generation.id}
              place={generation.place}
              page={page}
              onClick={handleGenerationCardClick}
            />
          );
        })}
      </div>
      <PokemonList pokemons={filteredPokemons} />
      {!loading && !filteredPokemons?.length && <EmptyState />}
    </div>
  );
};

export default Home;
