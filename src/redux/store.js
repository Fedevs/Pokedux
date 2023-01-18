import { configureStore } from '@reduxjs/toolkit';
import { logger } from '../middlewares';
import { dataReducer, uiReducer } from './slices';

const actionSanitizer = (action) => {
  action.type === 'data/setPokemons' && action.payload
    ? { ...action, payload: '<<LONG_BLOB>>' }
    : action;
};

const configureStoreOptions = {
  reducer: { data: dataReducer, ui: uiReducer },
  devTools: { actionSanitizer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
};

export const store = configureStore(configureStoreOptions);
