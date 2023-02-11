import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import PokemonList from 'components/PokemonList';

import EmptyState from 'components/EmptyState';
import GenerationCard from 'components/GenerationCard';

import {
  fetchPokemonWithDetails,
  setGeneration,
  setSearchText,
} from '../../redux';
import { pokemonGenerations } from 'constants/pokemonPerGeneration';

import './Home.css';

const Home = () => {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const generation = useSelector((state) => state.pagination.generation);
  const searchText = useSelector((state) => state.data.searchText);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  let filteredPokemons =
    pokemons[generation]?.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchText),
    ) || [];

  useEffect(() => {
    cacheOrFetch();
  }, [generation]);

  /**
   * Decide whether using cache or fetching new data to display pokemons
   */
  const cacheOrFetch = () => {
    if (pokemons[generation]?.length) {
      filteredPokemons = pokemons[generation];
    } else {
      dispatch(fetchPokemonWithDetails({ generation, page: 1 }));
    }
  };

  const handleGenerationCardClick = (id, evt) => {
    evt.target.scrollIntoView();
    searchText && emptySearchText();
    generation !== id && dispatch(setGeneration(id));
  };

  const emptySearchText = () => {
    dispatch(setSearchText(''));
  };

  return (
    <div className="home">
      <div className="generation-card-container">
        {pokemonGenerations.map(({ id, place }) => {
          return (
            <GenerationCard
              key={id}
              id={id}
              place={place}
              generation={generation}
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
