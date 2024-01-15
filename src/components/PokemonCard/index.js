import PropTypes from 'prop-types';
import { Card } from 'antd';
import StarButton from 'components/StarButton';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFavourite, setFavourite } from '../../redux';
import './PokemonCard.css';

const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();
  const favouritePokemons = useSelector(
    (state) => state.data.favouritePokemons,
  );
  const isFavourite = favouritePokemons.some(
    (favouritePokemon) => favouritePokemon.id === pokemon.id,
  );

  const headStyle = {
    boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.1)',
  };

  const handleIsFavourite = () => {
    if (isFavourite) {
      dispatch(deleteFavourite(pokemon));
    } else {
      dispatch(setFavourite(pokemon));
    }
  };

  return (
    <Card
      className="pokemon-card"
      headStyle={headStyle}
      hoverable
      title={pokemon.name}
      cover={
        <img
          className="card-cover"
          src={
            pokemon.sprites.other['dream_world'].front_default ||
            pokemon.sprites.other['official-artwork'].front_default
          }
          alt={pokemon.name}
          width={200}
          height={200}
          loading={'lazy'}
        />
      }
      extra={
        <StarButton isFavourite={isFavourite} onClick={handleIsFavourite} />
      }
    ></Card>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.object,
};

export default PokemonCard;
