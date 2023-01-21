import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';

import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';

import { fetchPokemonWithDetails } from '../../redux';
import logo from '../../statics/logo.svg';
import './Home.css';

const Home = () => {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonWithDetails());
  }, []);

  return (
    <div className="home">
      <div className="logo-container">
        <img src={logo} alt="Pokedux" width={300} />
      </div>
      <div className="search-bar">
        <Searcher />
      </div>
      {loading ? (
        <Spin spinning size="large" />
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
};

export default Home;
