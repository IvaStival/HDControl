import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { hdApi } from "./api/hdApi";
import { locApi } from "./api/locApi";
import hdReducer from "./api/hds/hdSlice";
import userReducer from "./api/user/userSlice";
import jobReducer from "./api/jobs/jobSlice";
import locReducer from "./api/loc/locSlice";

const store = configureStore({
  reducer: {
    // [hdApi.reducerPath]: hdApi.reducer,
    // [locApi.reducerPath]: locApi.reducer,
    hd: hdReducer,
    user: userReducer,
    job: jobReducer,
    loc: locReducer,
  },
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware().concat([hdApi.middleware, locApi.middleware]);
  // },
});

setupListeners(store.dispatch);

export default store;
// export {
//   useFetchHdsQuery,
//   useRemoveHdMutation,
//   useUpdateHdMutation,
//   useAddHdMutation,
//   useFetchHdQuery,
// } from "./api/hdApi";

// export {
//   useAddLocMutation,
//   useRemoveLocMutation,
//   useUpdateLocMutation,
//   useFetchLocWithHdsQuery,
//   useFetchLocWithSpecificHdQuery,
//   useFetchLocQuery,
//   useFetchLocsQuery,
// } from "./api/locApi";
