import { configureStore } from '@reduxjs/toolkit';
import { logger, CapitalizePokemonName } from '../middlewares';
import { dataReducer, paginationReducer, uiReducer } from './slices';

const configureStoreOptions = {
  reducer: { data: dataReducer, ui: uiReducer, pagination: paginationReducer },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false, devTools: true })
      .concat(logger)
      .concat(CapitalizePokemonName),
};

export const store = configureStore(configureStoreOptions);
