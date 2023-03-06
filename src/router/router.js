import { createBrowserRouter } from 'react-router-dom';
import Home from 'pages/Home';
import Favourites from 'pages/Favourites';
import Root from 'pages/Root';
import ErrorPage from 'pages/Error';

export const router = createBrowserRouter([
  {
    path: '/Pokedux',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'favourites',
        element: <Favourites />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);
