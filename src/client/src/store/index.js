import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { hdApi } from "./api/hdApi";

const store = configureStore({
    reducer: {
        [hdApi.reducerPath]: hdApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
                .concat(hdApi.middleware)
    }
});

setupListeners(store.dispatch);

export default store;
export { useFetchHdsQuery, useAddHdMutation } from './api/hdApi'; 