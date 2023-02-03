import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import PokemonList from 'components/PokemonList';

import EmptyState from 'components/EmptyState';
import GenerationCard from 'components/GenerationCard';

import { fetchPokemonWithDetails, setPage } from '../../redux';
import { pokemonGenerations } from 'constants/pokemonPerGeneration';

import './Home.css';

const Home = () => {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const searchText = useSelector((state) => state.data.searchText);
  const page = useSelector((state) => state.pagination.page);
  const loading = useSelector((state) => state.ui.loading);

  const dispatch = useDispatch();
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchText),
  );

  useEffect(() => {
    const useCache = sessionStorage.getItem('useLoadedData') === 'true';
    if (!useCache) {
      dispatch(fetchPokemonWithDetails(page));
    }
  }, [page]);

  const handleGenerationCardClick = (id, evt) => {
    if (page !== id) {
      evt.target.scrollIntoView();
      sessionStorage.setItem('useLoadedData', false);
      dispatch(setPage(id));
    }
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
      {!loading && !filteredPokemons.length && <EmptyState />}
    </div>
  );
};

export default Home;
