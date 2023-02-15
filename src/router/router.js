import { createBrowserRouter } from 'react-router-dom';
import Home from 'pages/Home';
import Error from 'pages/Error';
import Favourites from 'pages/Favourites';
import Root from 'pages/Root';

export const router = createBrowserRouter([
  {
    path: '/Pokedux',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'favourites',
        element: <Favourites />,
      },
    ],
  },
]);
