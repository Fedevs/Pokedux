import pokeball from 'statics/pokeball.webp';
import './SkeletonImage.css';

const SkeletonImage = () => {
  return (
    <img
      className="skeleton-image"
      src={pokeball}
      alt={'loading'}
      width={200}
      height={200}
    />
  );
};

export default SkeletonImage;
