import { configureStore } from '@reduxjs/toolkit';

import reducer from './slices';

export * from './slices';

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
});

export type AppDispatch = typeof store.dispatch;
export type IStore = ReturnType<typeof store.getState>;
