
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
    getAllChats: '/conversation/getUserChats',
    getUsernamesForSearch: (input) => `/user/searchUsernames?search=${input}`,
    createChat: '/conversation/create',
    sendChatMessage: '/chat/sendMessage',
    markAsReadChat: '/conversation/markAsRead',
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
    addScheduledPost: '/post/scheduledPost',
    getScheduledPosts: (id) => `subreddit/mod/scheduledPosts?subredditId=${id}`,
    getNotifications: (limit) => `/notification/user?limit${limit}`,
    markNotificationAsRead: '/notification/markRead',
    markAllNotificationsAsRead: '/notification/markAllRead',
    userUpvotedPosts: (username) => (page, limit) => {
        return `/user/upvotedPosts?username=${username}&page=${page}&limit=${limit}`;
    },
    userSavedPosts: (username) => (page, limit) => {
        return `/user/savedPosts?username=${username}&page=${page}&limit=${limit}`;
    },
    userDownvotedPosts: (username) => (page, limit) => {
        return `/user/downvotedPosts?username=${username}&page=${page}&limit=${limit}`;
    },
    userHiddenPosts: (username) => (page, limit) => {
        return `/user/hiddenPosts?username=${username}&page=${page}&limit=${limit}`;
    },
    userAllPosts: (username) => (page, limit) => {
        return `/user/posts?username=${username}&page=${page}&limit=${limit}`;
    },
    userComments: (username) => (page, limit) => {
        return `/user/comments?username=${username}&page=${page}&limit=${limit}`;
    },
    userInfo: (userId) => `/user/info?userId=${userId}`,
    getPost: (postId) => `/post/get?postId=${postId}`,
    homeFeed: (sortBy) => (page, limit) => {
        return `/post/homepage/feed?sort=${sortBy}&page=${page}&limit=${limit}`;
    },
    communityFeed: (subredditName, sortBy) => (page, limit) => {
        return `/subreddit/feed?subredditName=${subredditName}&sort=${sortBy}&page=${page}&limit=${limit}`;
    },
    upvote: '/post/upvote',
    downvote: '/post/downvote',
    cancelUpvote: '/post/cancelUpvote',
    cancelDownvote: '/post/cancelDownvote',
    unmoderatedPosts: (subredditName) => (page, limit) => {
        return `/subreddit/unmoderatedPosts?subredditName=${subredditName}&page=${page}&limit=${limit}`;
    },
    reportedPosts: (subredditName) => (page, limit) => {
        return `/subreddit/reportedPosts?subredditName=${subredditName}&page=${page}&limit=${limit}`;
    },
    editedPosts: (subredditName) => (page, limit) => {
        return `/subreddit/editedPosts?subredditName=${subredditName}&page=${page}&limit=${limit}`;
    },
    removedPosts: (subredditName) => (page, limit) => {
        return `/subreddit/removedPosts?subredditName=${subredditName}&page=${page}&limit=${limit}`;
    },
    savePost: '/post/save',
    unsavePost: '/post/unsave',
    hidePost: '/post/hide',
    unhidePost: '/post/unhide',
    lockPost: '/post/lockPost',
    unlockPost: '/post/unlockPost',
    approvePost: '/post/approvePost',
    removePost: '/post/removePost',
    reportPost: '/post/report',
    forceApprove: '/subreddit/user/forcedApproved',
    hideNotification: '/notification/hide',
    votePoll: '/post/votePoll',
    postComments: (postId) => (page, limit) => {
        return `/post/comments?postId=${postId}&page=${page}&limit=${limit}`;
    },
    commentUpvote: '/comment/upvote',
    commentDownvote: '/comment/downvote',
    commentCancelUpvote: '/comment/cancelUpvote',
    commentCancelDownvote: '/comment/cancelDownvote',
    addComment: '/comment/addComment',
    followUser: '/user/followUser',
    unfollowUser: '/user/unfollowUser',
    getBannedUsers: (name) => `/subreddit/users/banned?subredditName=${name}`,
    getCommunityType: (name) => `/subreddit/type?subredditName=${name}`,
    // TODO-BACKEND: destruct the right properties from the community object
    // Add more routes as needed
};

export {API_ROUTES};
