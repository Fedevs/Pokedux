import { createBrowserRouter } from 'react-router-dom';
import Home from 'pages/Home';
import Error from 'pages/Error';
import Favourites from 'pages/Favourites';
import Root from 'pages/Root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: 'Pokedux',
        element: <Home />,
      },
      {
        path: 'favourites',
        element: <Favourites />,
      },
    ],
  },
]);
