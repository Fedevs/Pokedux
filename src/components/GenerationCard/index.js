import PropTypes from 'prop-types';
import './GenerationCard.css';

const GenerationCard = ({ id, place, page, onClick }) => {
  const className = `generation-card${page === id ? ' --active' : ''} `;
  return (
    <button className={className} onClick={(e) => onClick(id, e)}>
      {place}
    </button>
  );
};

GenerationCard.propTypes = {
  id: PropTypes.number,
  place: PropTypes.string,
  page: PropTypes.number,
  onClick: PropTypes.func,
};

export default GenerationCard;
