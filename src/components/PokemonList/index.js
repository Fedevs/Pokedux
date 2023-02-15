import PropTypes from 'prop-types';
import PokemonCard from 'components/PokemonCard/index.js';
import SkeletonPokemonCard from 'components/SkeletonPokemonCard';
import { useSelector, useDispatch } from 'react-redux';
import './PokemonList.css';
import { fetchPokemonWithDetails } from '../../redux';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { namedPaths } from 'router/namedPaths';

const PokemonList = ({ pokemons, generation }) => {
  const pokemonListRef = useRef(null);
  const { pathname } = useLocation();
  const loading = useSelector((state) => state.ui.loading);
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const totalPages = useSelector((state) => state.pagination.totalPages);
  const searchText = useSelector((state) => state.data.searchText);

  const allowInfiniteScroll = () => {
    const lastPage = currentPage === totalPages;
    const nonFilteredPokemons = searchText === '';
    const isFavouriteView = pathname === namedPaths.favourites;

    return !lastPage && nonFilteredPokemons && !loading && !isFavouriteView;
  };

  const dispatch = useDispatch();

  const fetchMore = () => {
    if (allowInfiniteScroll()) {
      dispatch(fetchPokemonWithDetails({ generation, page: currentPage + 1 }));
      // To avoid multiple refetching
      window.scrollBy(0, -5);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // If is intersecting, we fetch more pokemons
            fetchMore();
          }
        });
      },
      // The element should be 100% visible
      { threshold: 1 },
    );

    // Watching list last element
    const containerNode = pokemonListRef.current;

    if (containerNode?.lastElementChild) {
      observer.observe(containerNode.lastElementChild);
    }
    // Removing observer when component unmount
    return () => {
      if (containerNode?.lastElementChild) {
        observer.unobserve(containerNode.lastElementChild);
      }
    };
  }, [pokemons]);

  return (
    <div className="pokemon-list" ref={pokemonListRef}>
      {loading && <SkeletonPokemonCard quantity={8} />}
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
      {allowInfiniteScroll() && <SkeletonPokemonCard quantity={4} />}
    </div>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.array,
  generation: PropTypes.number,
};

export default PokemonList;
