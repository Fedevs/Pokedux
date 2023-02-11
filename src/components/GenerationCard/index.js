import PropTypes from 'prop-types';
import './GenerationCard.css';

const GenerationCard = ({ id, place, generation, onClick }) => {
  const className = `generation-card${generation === id ? ' --active' : ''} `;
  return (
    <button className={className} onClick={(e) => onClick(id, e)}>
      {place}
    </button>
  );
};

GenerationCard.propTypes = {
  id: PropTypes.number,
  place: PropTypes.string,
  generation: PropTypes.number,
  onClick: PropTypes.func,
};

export default GenerationCard;
