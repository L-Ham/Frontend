

// Define your API endpoints as key-value pairs for easy reference
const API_ROUTES = {
    /* Example
    USER_INFO: (username) => `/users/${username}/about`,
    CAST_VOTE: '/api/vote',
    */
    login: '/auth/login',
    accountSettings: '/user/accountSettings',
    profileSettings: '/user/profileSettings',
    safetySettings: '/user/safetyAndPrivacySettings',
    feedSettings: '/user/feedSettings',
    notificationSettings: '/user/notificationsSettings',
    banner: '/user/banner',
    avatar: '/user/avatarImage',
    blockUser: '/user/blockUser',
    unblockUser: '/user/unblockUser',
    muteCommunity: '/user/muteCommunity',
    unmuteCommunity: '/user/unmuteCommunity',
    emailSettings: '/user/emailSettings',
    chatSettings: '/user/messagingSettings',
    getAvatar: '/user/avatarImage',
    getBanner: '/user/banner',
    getInfo: '/user/selfInfo',
    signup: '/auth/signUp',
    forgotusername: '/auth/forgotUsername',
    generateusernames: '/auth/generateUsernames',
    GoogleLogin: '/auth/googleLogin',
    GoogleSignUp: '/auth/googleSignUp',
    forgotpassword: '/auth/forgotPassword',
    updatepassword: '/auth/updatePassword',
    userSelfInfo: '/user/selfInfo',
    getPopularCommunities: '/subreddit/popularCommunity',
    getUserCommunities: '/user/community',
    getTrendingPosts: '/post/trending',
    editSocial: '/user/socialLink',
    Location: '/user/getUserLocation',
    editLocation: '/user/editUserLocation',
    deleteUser: '/auth/deleteAccount',
    googleConnect: '/auth/googleConnect',
    // Add more routes as needed
};

export {API_ROUTES};
