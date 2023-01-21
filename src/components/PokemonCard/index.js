import PropTypes from 'prop-types';

import { Card } from 'antd';
import StarButton from '../StarButton';
import { useDispatch } from 'react-redux';
import { setFavourite } from '../../redux';

const PokemonCard = ({ id, name, url, isFavourite }) => {
  const dispatch = useDispatch();

  const handleisFavourite = () => {
    dispatch(setFavourite({ pokemonID: id }));
  };

  return (
    <Card
      className="pokemon-card"
      title={name}
      cover={<img src={url} alt={name} />}
      extra={
        <StarButton isFavourite={isFavourite} onClick={handleisFavourite} />
      }
    ></Card>
  );
};

PokemonCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  url: PropTypes.string,
  isFavourite: PropTypes.bool,
};

export default PokemonCard;
