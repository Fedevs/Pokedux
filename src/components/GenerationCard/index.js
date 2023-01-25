import PropTypes from 'prop-types';
import './GenerationCard.css';

const GenerationCard = ({ place, onClick }) => {
  return (
    <button className="generation-card" onClick={onClick}>
      {place}
    </button>
  );
};

GenerationCard.propTypes = {
  place: PropTypes.string,
  onClick: PropTypes.func,
};

export default GenerationCard;
