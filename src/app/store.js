import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from '../sevices/CryptoApi';

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]:cryptoApi.reducer,
    },
});