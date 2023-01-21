import PropTypes from 'prop-types';
import { Input } from 'antd';

const Searcher = ({ onChange, loading }) => {
  return (
    <Input.Search
      placeholder="Search"
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
