import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

// Configuring the Store
// eslint-disable-next-line
export default function createStore(initialState={}) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: initialState
  }


  )
}

