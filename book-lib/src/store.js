import {configureStore} from '@reduxjs/toolkit';
import indexReducer from './indexSlice';

export const store = configureStore({
    reducer: {
        index: indexReducer
    },
});
