
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
    subredditAvatar: '/subreddit/avatarImage',
    subredditBanner: '/subreddit/banner',
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
    getCommunities: '/user/community',
    setFavorite: '/user/favouriteSubreddit',
    unsetFavorite: '/user/unFavouriteSubreddit',
    communityDetails: (name) => `/subreddit/communityDetails?subRedditName=${name}`,
    subredditRules: (id) => `/subreddit/rule?subredditId=${id}`,
    widgets: (id) => `/subreddit/widget?subredditId=${id}`,
    searchCommunities: (name) => `/subreddit/nameSearch?search=${name}`,
    createPost: '/post/createPost',
    joinCommunity: '/user/joinCommunity',
    leaveCommunity: '/user/unjoinCommunity',
    createCommunity: '/subreddit/createCommunity',
    banUser: '/subreddit/user/ban',
    unbanUser: '/subreddit/user/unban',
    composeMessage: '/message/compose',
    leaveMod: '/subreddit/mod/leave',
    approveUser: '/subreddit/user/approve',
    unapproveUser: '/subreddit/user/unapprove',
    removeUser: '/subreddit/user/remove',
    inviteMod: '/subreddit/mod/invite',
    acceptModinvite: '/subreddit/mod/invite/accept',
    declineModinvite: '/subreddit/mod/invite/decline',
    sentMessages: '/message/getSentMessages',
    unreadMessages: '/message/inbox/unread',
    markAsRead: '/message/read',
    markAsUnread: '/message/unread',
    allInbox: '/message/getAllInbox',
    unsendMessage: '/message/getSentMessages/unsend',
    reorderRules: '/subreddit/reorderRules',
    addRule: '/subreddit/rule',
    getRemovalReasons: (id) => `/subreddit/removalReasons?subredditId=${id}`,
    removalReason: '/subreddit/removalReason',
    suggestCommunity: '/subreddit/suggest',
    editCommunityDetails: '/subreddit/communityDetails',
    editTextWidget: '/subreddit/TextWidget',
    addBookmark: '/subreddit/bookmark/button',
    addBookmarksWidget: '/subreddit/widget/bookmark',
    // TODO-BACKEND: destruct the right properties from the community object
    // Add more routes as needed
};

export {API_ROUTES};
