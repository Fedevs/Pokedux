import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { HomeOutlined, StarOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import Searcher from 'components/Searcher';
import { setSearchText } from '../../redux';
import logo from 'statics/logo.svg';
import './Root.css';

const Root = () => {
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();
  const router = useLocation();
  const favouriteView = router.pathname === '/favourites';
  const navigate = useNavigate();

  const handleOnChange = (evt) => {
    const name = evt.target.value;
    dispatch(setSearchText(name.toLowerCase()));
  };

  const handleRedirect = () => {
    let path = '';
    if (favouriteView) {
      path = '/';
    } else {
      sessionStorage.setItem('useLoadedData', true);
      path = '/favourites';
    }
    navigate(path);
  };

  return (
    <div className="root">
      <div className="logo-container">
        <img src={logo} alt="Pokedux" />
      </div>
      <div className="search-bar">
        <Searcher loading={loading} onChange={handleOnChange} />
        <nav className="nav">
          <li>
            <Button
              onClick={handleRedirect}
              icon={favouriteView ? <HomeOutlined /> : <StarOutlined />}
            />
          </li>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Root;
