import PropTypes from 'prop-types';
import { Card } from 'antd';
import SkeletonImage from 'components/SkeletonImage';
import './SkeletonPokemonCard.css';

const SkeletonPokemonCard = ({ quantity } = { quantity: 1 }) => {
  const headStyle = {
    boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.1)',
  };

  return [...Array(quantity)].map((_, index) => {
    const key = `skeleton-${index}`;
    return (
      <Card
        key={key}
        className="skeleton-pokemon-card"
        headStyle={headStyle}
        hoverable
        title={<div className="title-loading"></div>}
        cover={<SkeletonImage />}
        extra={<div className="star-loading"></div>}
      ></Card>
    );
  });
};

SkeletonPokemonCard.proptypes = {
  quantity: PropTypes.number,
};

export default SkeletonPokemonCard;
