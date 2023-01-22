import { Empty } from 'antd';
import emptyBall from '../../statics/emptyball.png';
import './EmptyState.css';

const EmptyState = () => {
  const attrs = {
    description: 'No pokemons were found',
    image: emptyBall,
  };

  return <Empty className="empty-state" {...attrs} />;
};

export default EmptyState;
