import axios from 'axios';

// Setup a base URL
const BASE_URL = 'http://localhost:3000';
// const BASE_URL = 'http://reddit-bylham.com/';

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
        return Promise.reject(error);
    },
);

export {axiosInstance};
