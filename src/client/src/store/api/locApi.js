import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const locApi = createApi({
  reducerPath: "loc",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  endpoints(builder) {
    return {
      removeLoc: builder.mutation({
        invalidatesTags: (result, error, loc) => {
          return [{ type: "loc", id: loc.id }];
        },
        query: (hd_id) => {
          return {
            method: "DELETE",
            url: `/locs/${hd_id}`,
            // url: `hds?_embed=locs`
          };
        },
      }),
      addLoc: builder.mutation({
        invalidatesTags: (result, error, loc) => {
          return [{ type: "loc", id: loc.id }];
        },
        query: (loc) => {
          return {
            url: "/locs",
            method: "POST",
            body: {
              location: loc.location,
              responsible: loc.responsible,
              phone: loc.phone,
              mail: loc.mail,
              date: loc.date,
              job: loc.job,
              size: loc.size, // The total files copieded to HD
              type: loc.type, // Backup, RAW or none
              description: loc.description,
              hdId: loc.hd_id,
            },
          };
        },
      }),
      updateLoc: builder.mutation({
        invalidatesTags: (result, error, loc) => {
          return [{ type: "loc", id: loc.id }];
        },

        query: (loc) => {
          return {
            url: `/locs/${loc.id}`,
            method: "PATCH",
            body: loc.inputs,
          };
        },
      }),
      fetchLocWithHds: builder.query({
        providesTags: (result, error, locs) => {
          const tags = result.map((loc) => {
            return { type: "loc", id: loc.id };
          });

          return tags;
        },
        query: () => {
          return {
            url: "/locs?_expand=hd",
            method: "GET",
          };
        },
      }),
      fetchLocWithSpecificHd: builder.query({
        providesTags: (result, error, locs) => {
          const tags = result.map((loc) => {
            return { type: "loc", id: loc.id };
          });

          return tags;
        },
        query: (id) => {
          return {
            url: `/locs?_expand=hd&hdId=${id}`,
            method: "GET",
          };
        },
      }),
      fetchLocs: builder.query({
        providesTags: (result, error, locs) => {
          const tags = result.map((loc) => {
            return { type: "loc", id: loc.id };
          });

          return tags;
        },
        query: () => {
          return {
            url: "/locs",
            method: "GET",
          };
        },
      }),
      fetchLoc: builder.query({
        query: (id) => {
          return {
            url: `/locs/${id}`,
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useAddLocMutation,
  useRemoveLocMutation,
  useUpdateLocMutation,
  useFetchLocWithHdsQuery,
  useFetchLocWithSpecificHdQuery,
  useFetchLocsQuery,
  useFetchLocQuery,
} = locApi;
export { locApi };
