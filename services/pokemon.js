import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

export const pokemonApi = createApi({

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pokeapi.co/api/v2/'
    }),

    endpoints: (builder) => ({
        getPokemon: builder.query({
            query: () => `pokemon/`
        })
    })

});

export const {
    useGetPokemonQuery,
    util: {
        getRunningQueriesThunk
    }
} = pokemonApi;

export const { getPokemon } = pokemonApi.endpoints;