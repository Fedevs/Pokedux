import { Outlet, useLocation, Link } from 'react-router-dom';
import { Button } from 'antd';
import { HomeOutlined, StarOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import Searcher from 'components/Searcher';
import { setSearchText } from '../../redux';
import { namedPaths } from 'router/namedPaths';
import logo from 'statics/logo.svg';
import './Root.css';

const Root = () => {
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();
  const router = useLocation();
  const favouriteView = router.pathname === namedPaths.favourites;

  const handleOnChange = (evt) => {
    const name = evt.target.value;
    dispatch(setSearchText(name.toLowerCase()));
  };

  return (
    <div className="root">
      <div className="logo-container">
        <Link to={namedPaths.home}>
          <img src={logo} alt="Pokedux" width={300} height={100} />
        </Link>
      </div>
      <div className="search-bar">
        <Searcher loading={loading} onChange={handleOnChange} />
        <nav className="nav">
          <li>
            <Link to={favouriteView ? namedPaths.home : namedPaths.favourites}>
              <Button
                icon={favouriteView ? <HomeOutlined /> : <StarOutlined />}
              />
            </Link>
          </li>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Root;
