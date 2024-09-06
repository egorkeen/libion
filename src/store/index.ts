import { configureStore } from "@reduxjs/toolkit";
import { anilibriaApi } from "./api";

export const store = configureStore({
  reducer: {
    [anilibriaApi.reducerPath]: anilibriaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(anilibriaApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
