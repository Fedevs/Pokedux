import PropTypes from 'prop-types';
import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';

const PokemonCard = ({ name, url, types }) => {
  return (
    <Card
      title={name}
      cover={<img src={url} alt={name} />}
      extra={<StarOutlined />}
    >
      {types.map((type) => {
        return <Meta description={type.type.name} key={name} />;
      })}
    </Card>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.object),
};

export default PokemonCard;
