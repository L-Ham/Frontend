// Define your API endpoints as key-value pairs for easy reference
const API_ROUTES = {
    /* Example
    USER_INFO: (username) => `/users/${username}/about`,
    CAST_VOTE: '/api/vote',
    */
    login: '/auth/login',
    getAvatar: 'user/avatarImage',
    getPopularCommunities: '/subreddit/popularCommunity',
    getUserCommunities: '/user/community',
    getTrendingPosts: '/post/trending',
    // Add more routes as needed
};

export {API_ROUTES};
