import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Searcher from 'components/Searcher';
import { setSearchText } from '../../redux';
import logo from 'statics/logo.svg';
import './Root.css';

const Root = () => {
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  const handleOnChange = (evt) => {
    const name = evt.target.value;
    dispatch(setSearchText(name.toLowerCase()));
  };

  return (
    <div className="root">
      <div className="logo-container">
        <img src={logo} alt="Pokedux" />
      </div>
      <div className="search-bar">
        <Searcher loading={loading} onChange={handleOnChange} />
      </div>
      <Outlet />
    </div>
  );
};

export default Root;
