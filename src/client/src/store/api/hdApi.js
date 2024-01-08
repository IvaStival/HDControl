import { url, backend_port } from "../../utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// ROUTES
// /new - Create a new HD
//      - title: { type: String, required: true },
//      - size: { type: String, required: true },
//      - code: { type: String, required: true },
//      - qrcode: { type: String, required: true },
//      - is_home: { type: Boolean, required: false, default: true },
//      - localizationId: { type: String, required: false },
//      - type: { type: String, required: true },

// /hd/:id - Delet specific HD by id

// /hds - Return all created HDS

// /hds/:id - Return specific HD by id

const hdApi = createApi({
  reducerPath: "hds",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://${url}:${backend_port}/hds`,
  }),
  tagTypes: ["Hd"],
  endpoints(builder) {
    return {
      removeHd: builder.mutation({
        invalidatesTags: (result, error, hd) => {
          return [{ type: "Hd", id: hd.id }];
        },
        query: (hd) => {
          console.log(hd);
          return {
            method: "DELETE",
            url: `/hd/${hd._id}`,
          };
        },
      }),
      addHd: builder.mutation({
        invalidatesTags: (result, error, hd) => {
          return [{ type: "Hd", id: hd.id }];
        },
        query: (hd) => {
          return {
            url: "/new",
            method: "POST",
            body: {
              title: hd.title,
              size: hd.size,
              code: hd.code,
              is_home: true,
              qrcode: "qrcode",
              type: 1,
            },
          };
        },
      }),
      updateHd: builder.mutation({
        invalidatesTags: (result, error, hd) => {
          return [{ type: "Hd", id: hd.id }];
        },
        query: (hd) => {
          console.log(hd);
          return {
            url: `/hd/${hd.id}`,
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
      // GET ALL HDS ON THE DATA BASE
      fetchHds: builder.query({
        query: () => {
          return {
            url: "/hds",
            method: "GET",
          };
        },
        // A MORE BEATIFULL WAY TO PROVIDE TAGS TO BE INVALIDATED
        providesTags: (result, error, args) =>
          result.data
            ? [...result.data.map((hd) => ({ type: "Hd", id: hd._id }))]
            : [],

        // OLD WAY
        // if (result.data.length) {
        //   const tags = result.data.map((hd) => {
        //     return { type: "Hd", id: hd._id };
        //   });

        //   return tags;
        // } else {
        //   return [];
        // }
        // },
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
