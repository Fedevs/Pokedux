import { configureStore } from '@reduxjs/toolkit';
import { logger } from '../middlewares';
import { dataReducer, uiReducer } from './slices';

const configureStoreOptions = {
  reducer: { data: dataReducer, ui: uiReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
};

export const store = configureStore(configureStoreOptions);
