import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import './Searcher.css';

const Searcher = ({ onChange, loading }) => {
  const searchText = useSelector((state) => state.data.searchText);

  return (
    <Input.Search
      className="searcher"
      placeholder="Search"
      value={searchText}
      style={{ marginBottom: 10 }}
      loading={loading}
      onChange={onChange}
    />
  );
};

Searcher.propTypes = {
  onChange: PropTypes.func,
  loading: PropTypes.bool,
};

export default Searcher;
