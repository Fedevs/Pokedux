import PropTypes from 'prop-types';
import { Button } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';

const StarButton = ({ isFavourite, onClick }) => {
  const Icon = isFavourite ? StarFilled : StarOutlined;
  return <Button icon={<Icon />} onClick={onClick} />;
};

StarButton.propTypes = {
  isFavourite: PropTypes.bool,
  onClick: PropTypes.func,
};

export default StarButton;
