import PropTypes from 'prop-types';
import { Button } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';

const StarButton = ({ isFavorite, onClick }) => {
  const Icon = isFavorite ? StarFilled : StarOutlined;
  return <Button icon={<Icon />} onClick={onClick} />;
};

StarButton.propTypes = {
  isFavorite: PropTypes.bool,
  onClick: PropTypes.func,
};

export default StarButton;
