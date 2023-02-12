import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router/router';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const themeOptions = {
  token: {
    fontFamily: 'Roboto Mono',
    colorTextBase: '#63288F',
    colorPrimaryHover: '#63288F',
  },
};

root.render(
  <ConfigProvider theme={themeOptions}>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </ConfigProvider>,
);
