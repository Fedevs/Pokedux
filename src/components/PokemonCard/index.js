import PropTypes from 'prop-types';

import { Card } from 'antd';
import StarButton from 'components/StarButton';
import { useDispatch } from 'react-redux';
import { setFavourite } from '../../redux';

import './PokemonCard.css';

const PokemonCard = ({ id, name, url, isFavourite }) => {
  const dispatch = useDispatch();
  const headStyle = {
    boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.1)',
  };

  const handleisFavourite = () => {
    dispatch(setFavourite({ pokemonID: id }));
  };

  return (
    <Card
      className="pokemon-card"
      headStyle={headStyle}
      hoverable
      title={name}
      cover={<img src={url} alt={name} loading={'lazy'} />}
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
