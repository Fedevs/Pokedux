import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';

import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';
import EmptyState from '../../components/EmptyState';
import GenerationCard from '../../components/GenerationCard';

import { fetchPokemonWithDetails, setPage, setSearchText } from '../../redux';
import { pokemonGenerations } from '../../constants/pokemonPerGeneration';
import logo from '../../statics/logo.svg';

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
    dispatch(fetchPokemonWithDetails(page));
  }, [page]);

  const handleOnChange = (evt) => {
    const name = evt.target.value;
    dispatch(setSearchText(name.toLowerCase()));
  };

  const handleGenerationCardClick = (id, evt) => {
    if (page !== id) {
      evt.target.scrollIntoView();
      dispatch(setPage(id));
    }
  };

  return (
    <div className="home">
      <div className="logo-container">
        <img src={logo} alt="Pokedux" />
      </div>
      <div className="search-bar">
        <Searcher loading={loading} onChange={handleOnChange} />
      </div>
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
      {loading ? (
        <Spin spinning size="large" />
      ) : filteredPokemons.length ? (
        <PokemonList pokemons={filteredPokemons} />
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default Home;
