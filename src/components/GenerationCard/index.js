import PropTypes from 'prop-types';
import './GenerationCard.css';

const GenerationCard = ({ id, place, onClick }) => {
  return (
    <button className="generation-card" onClick={(e) => onClick(id, e)}>
      {place}
    </button>
  );
};

GenerationCard.propTypes = {
  id: PropTypes.number,
  place: PropTypes.string,
  onClick: PropTypes.func,
};

export default GenerationCard;
