import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const hdApi = createApi({
  reducerPath: "hds",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  endpoints(builder) {
    return {
      removeHd: builder.mutation({
        invalidatesTags: (result, error, hd) => {
          return [{ type: "Hd", id: hd.id }];
        },
        query: (hd) => {
          return {
            method: "DELETE",
            url: `/hds/${hd.id}`,
          };
        },
      }),
      addHd: builder.mutation({
        invalidatesTags: (result, error, hd) => {
          return [{ type: "Hd", id: hd.id }];
        },
        query: (hd) => {
          return {
            url: "/hds",
            method: "POST",
            body: {
              title: hd.title,
              size: hd.size,
              code: hd.code,
              qrcode: "QRCode",
            },
          };
        },
      }),
      updateHd: builder.mutation({
        invalidatesTags: (result, error, hd) => {
          return [{ type: "Hd", id: hd.id }];
        },
        query: (hd) => {
          return {
            url: `/hds/${hd.id}`,
            method: "PATCH",
            body: hd.inputs,
          };
        },
      }),
      fetchHd: builder.query({
        query: (id) => {
          return {
            url: `/hds/${id}`,
            method: "GET",
          };
        },
      }),
      fetchHds: builder.query({
        providesTags: (result, error, hds) => {
          const tags = result.map((hd) => {
            return { type: "Hd", id: hd.id };
          });

          return tags;
        },
        query: () => {
          return {
            url: "/hds",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useAddHdMutation,
  useRemoveHdMutation,
  useUpdateHdMutation,
  useFetchHdsQuery,
  useFetchHdQuery,
} = hdApi;
export { hdApi };
