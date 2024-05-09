import axios from 'axios';
import store from '../store/store.js';
import {logout} from '../store/userSlice.js';
// Setup a base URL
// export const BASE_URL = 'http://localhost:5000';
export const BASE_URL = 'https://reddit-bylham.me/api';

// Create an Axios instance with the base URL and any other default configurations
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    // Include other default headers here
    },
    // Other default options like timeouts go here
});

// Optionally, setup interceptors for request/response handling
axiosInstance.interceptors.request.use(
    (config) => {
        // Perform actions before request is sent, like setting auth tokens
        const state = store.getState();
        if (state.user.token) {
            config.headers.Authorization = `Bearer ${state.user.token}`;
        }
        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    },
);

axiosInstance.interceptors.response.use(
    (response) => {
        // Any status code within the range of 2xx cause this function to trigger
        return response;
    },
    (error) => {
        // Handle responses outside of the 2xx range
        if (error.response.status === 403 || error.response.status === 401) {
            // If the response status is 403 (Unauthorized), logout the user
            store.dispatch(logout());
            window.location.href = '/login?url=' + window.location.pathname;
        }
        return Promise.reject(error);
    },
);

export {axiosInstance};
