import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App.js';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './store/store.js';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import TimeAgo from 'javascript-time-ago';
import {GoogleOAuthProvider} from '@react-oauth/google';

import en from 'javascript-time-ago/locale/en';
import ru from 'javascript-time-ago/locale/ru';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);
import {worker} from './mocks/broswer.js';
const mocks = async () => worker.start();
const root = ReactDOM.createRoot(document.getElementById('root'));
const clientId = '332399911432-vjl376a05ukf0hhpj6kq0hnuibij26dh.apps.googleusercontent.com';
const render = () => root.render(

    <GoogleOAuthProvider clientId={clientId}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistStore(store)}>
                <App />
            </PersistGate>
        </Provider>
    </GoogleOAuthProvider>
    ,
);

const enableMock = false;

enableMock ? mocks().then(render()) : render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
