import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from 'redux-logger';

import { pokemonApi } from '../services/pokemon';
import todosReducer from '../reducers/todos';

const makeStore = () => configureStore({
    reducer: {
        todos: todosReducer,
        [ pokemonApi.reducerPath ]: pokemonApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .concat(pokemonApi.middleware)
            .concat(logger),
    devTools: true
});

export const wrapper = createWrapper(makeStore);