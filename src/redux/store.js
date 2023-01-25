import { configureStore } from '@reduxjs/toolkit';
import { logger, CapitalizePokemonName } from '../middlewares';
import { dataReducer, paginationReducer, uiReducer } from './slices';

const actionSanitizer = (action) => {
  action.type === 'data/setPokemons' && action.payload
    ? { ...action, payload: '<<LONG_BLOB>>' }
    : action;
};

const configureStoreOptions = {
  reducer: { data: dataReducer, ui: uiReducer, pagination: paginationReducer },
  devTools: { actionSanitizer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(logger)
      .concat(CapitalizePokemonName),
};

export const store = configureStore(configureStoreOptions);
