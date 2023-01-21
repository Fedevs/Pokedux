import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';

import PokemonList from '../../components/PokemonList';
import Searcher from '../../components/Searcher';

import { fetchPokemonWithDetails, setSearchText } from '../../redux';
import logo from '../../statics/logo.svg';
import './Home.css';

const Home = () => {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const searchText = useSelector((state) => state.data.searchText);

  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchText),
  );

  useEffect(() => {
    dispatch(fetchPokemonWithDetails());
  }, []);

  const handleOnChange = (evt) => {
    const name = evt.target.value;
    dispatch(setSearchText(name.toLowerCase()));
  };

  return (
    <div className="home">
      <div className="logo-container">
        <img src={logo} alt="Pokedux" width={300} />
      </div>
      <div className="search-bar">
        <Searcher loading={loading} onChange={handleOnChange} />
      </div>
      {loading ? (
        <Spin spinning size="large" />
      ) : (
        <PokemonList pokemons={filteredPokemons} />
      )}
    </div>
  );
};

export default Home;
