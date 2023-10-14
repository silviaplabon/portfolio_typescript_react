import { configureStore } from "@reduxjs/toolkit";

import emailInputSliceReducer from "./inputSlice";

const store = configureStore({
  reducer: {
    emailInput: emailInputSliceReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
