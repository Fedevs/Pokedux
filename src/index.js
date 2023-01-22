import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const themeOptions = {
  token: {
    fontFamily: 'Roboto Mono',
  },
};

root.render(
  <React.StrictMode>
    <ConfigProvider theme={themeOptions}>
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </React.StrictMode>,
);
