import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import PokemonList from 'components/PokemonList';

import EmptyState from 'components/EmptyState';
import GenerationCard from 'components/GenerationCard';

import { fetchPokemonWithDetails, setPage, setPokemons } from '../../redux';
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
    if (!pokemons.length) {
      dispatch(fetchPokemonWithDetails(page));
    }
  }, [page]);

  const handleGenerationCardClick = (id, evt) => {
    if (page !== id) {
      evt.target.scrollIntoView();
      deletePokemons();
      dispatch(setPage(id));
    }
  };

  const deletePokemons = () => {
    dispatch(setPokemons([]));
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
