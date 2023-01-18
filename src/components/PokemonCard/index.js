import PropTypes from 'prop-types';

import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import StarButton from '../StarButton';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../../actions';

const PokemonCard = ({ id, name, url, types, isFavorite }) => {
  const typesString = types.map((type) => type.type.name).join(', ');
  const dispatch = useDispatch();

  const handleIsFavorite = () => {
    dispatch(setFavorite({ pokemonID: id }));
  };

  return (
    <Card
      title={name}
      cover={<img src={url} alt={name} />}
      extra={<StarButton isFavorite={isFavorite} onClick={handleIsFavorite} />}
    >
      <Meta description={typesString} />
    </Card>
  );
};

PokemonCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  url: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.object),
  isFavorite: PropTypes.bool,
};

export default PokemonCard;
