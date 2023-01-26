import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const hdApi = createApi({
    reducerPath: 'hds',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001',

    }),
    endpoints(builder){
        return {
            addHd: builder.mutation({
                query: (hd) => {
                    return {
                        url: '/hds',
                        method: "POST",
                        body: {
                            title: hd.title,
                            size: hd.size,
                            code: hd.code,
                            qrcode: 'QRCode',
                        }
                    }
                }
            }),
            fetchHds: builder.query({
                query: () => {
                    return{
                        url: "/hds",
                        method: "GET"
                    }
                }
            })
        }
    }
})

export const { useAddHdMutation, useFetchHdsQuery } = hdApi;
export { hdApi };