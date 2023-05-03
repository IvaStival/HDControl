import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { hdApi } from "./api/hdApi";
import { locApi } from "./api/locApi";

const store = configureStore({
  reducer: {
    [hdApi.reducerPath]: hdApi.reducer,
    [locApi.reducerPath]: locApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([hdApi.middleware, locApi.middleware]);
  },
});

setupListeners(store.dispatch);

export default store;
export {
  useFetchHdsQuery,
  useRemoveHdMutation,
  useUpdateHdMutation,
  useAddHdMutation,
  useFetchHdQuery,
} from "./api/hdApi";

export {
  useAddLocMutation,
  useRemoveLocMutation,
  useUpdateLocMutation,
  useFetchLocWithHdsQuery,
  useFetchLocWithSpecificHdQuery,
  useFetchLocQuery,
  useFetchLocsQuery,
} from "./api/locApi";
