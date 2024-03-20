import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer, {initialState as userInitialState} from './userSlice.js';
import expireReducer from 'redux-persist-expire';


const persistConfig = {
    key: 'root',
    storage,
    transforms: [
        expireReducer('user', {
            expireSeconds: 60 * 60 * 24 * 30 * 2,
            expiredState: userInitialState,
            autoExpire: true,
        }),
    ],
};

const reducer = combineReducers({
    user: rootReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
});
export default store;
