import PropTypes from 'prop-types';

import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import StarButton from '../StarButton';
import { useDispatch } from 'react-redux';
import { setFavourite } from '../../redux';

const PokemonCard = ({ id, name, url, types, isFavourite }) => {
  const typesString = types.map((type) => type.type.name).join(', ');
  const dispatch = useDispatch();

  const handleisFavourite = () => {
    dispatch(setFavourite({ pokemonID: id }));
  };

  return (
    <Card
      title={name}
      cover={<img src={url} alt={name} />}
      extra={
        <StarButton isFavourite={isFavourite} onClick={handleisFavourite} />
      }
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
  isFavourite: PropTypes.bool,
};

export default PokemonCard;
