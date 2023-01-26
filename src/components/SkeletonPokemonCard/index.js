import { Card } from 'antd';
import SkeletonImage from 'components/SkeletonImage';
import './SkeletonPokemonCard.css';

const SkeletonPokemonCard = () => {
  const headStyle = {
    boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    <Card
      className="skeleton-pokemon-card"
      headStyle={headStyle}
      hoverable
      title={<div className="title-loading"></div>}
      cover={<SkeletonImage />}
      extra={<div className="star-loading"></div>}
    ></Card>
  );
};

export default SkeletonPokemonCard;
