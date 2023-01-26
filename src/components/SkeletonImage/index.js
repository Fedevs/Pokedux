import pokeball from 'statics/pokeball.png';
import './SkeletonImage.css';

const SkeletonImage = () => {
  return <img className="skeleton-image" src={pokeball} alt={'loading'} />;
};

export default SkeletonImage;
