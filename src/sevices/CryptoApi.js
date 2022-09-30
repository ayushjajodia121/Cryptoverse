import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL_RAPID_API } from '../utils/constants';

// const coins = 'coins';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '2210c24aa0mshf3c4043ed229403p123e49jsn1c5f2d463e77',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};
const myHeaders = new Headers();
myHeaders.append('X-RapidAPI-Key','2210c24aa0mshf3c4043ed229403p123e49jsn1c5f2d463e77');
myHeaders.append('X-RapidAPI-Host','coinranking1.p.rapidapi.com');
// console.log(myHeaders.get('X-RapidAPI-Key'));
// const createRequest = (url) => ({
//     url,
//     headers: cryptoApiHeaders,
//     mode:'cors',
//     method:'GET'
// });
    

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL_RAPID_API,
        // prepareHeaders: (headers) => { 
        //     headers.set( 'X-RapidAPI-Key','2210c24aa0mshf3c4043ed229403p123e49jsn1c5f2d463e77');
        //     headers.set( 'X-RapidAPI-Host','coinranking1.p.rapidapi.com');
        //     headers.get('X-RapidAPI-Key');
        //     headers.set('authorization', `Bearer 1234546`)

        //     console.log("headers:==",headers.get('X-RapidAPI-Key'));
        //     console.log("headers:==",headers);
        //     return headers;
        // }
    }),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query: () => {
                return {
                  url: `coins`,
                  method: "GET",
                  headers: cryptoApiHeaders
                };
            }
        })
    })
});

export const { useGetCryptosQuery } = cryptoApi;