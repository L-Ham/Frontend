// Define your API endpoints as key-value pairs for easy reference
const API_ROUTES = {
    /* Example
    USER_INFO: (username) => `/users/${username}/about`,
    CAST_VOTE: '/api/vote',
    */
    getUser: (id) => `/users/${id}`,
    getUserAbout: (username) => `/user/${username}/about`,
    // Add more routes as needed
};

export {API_ROUTES};
