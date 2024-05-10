import {createSlice} from '@reduxjs/toolkit';
// import {recentPostsData} from '../pages/PopularPage/RightSideBar/data.js';

const initialState = {
    userId: '',
    displayName: '',
    username: '', // display name is different than username
    commentKarma: '',
    created: 0,
    postKarma: '',
    avatar: '',
    banner: '',
    About: '',
    token: '',
    theme: 'light',
    recentPosts: {},
    recentCommunities: {},
};
const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token;
        },
        setTheme: (state, action) => {
            state.theme = action.payload.theme;
        },
        selfInfo: (state, action) => {
            Object.assign(state, action.payload);
        },
        logout: (state, action) => {
            Object.assign(state, initialState);
            state.theme = action.payload.theme;
            // console.log('in logout', action.payload.theme);
        },
        clearRecentPosts: (state) => {
            state.recentPosts = {};
        },
        addRecentPost: (state, action) => {
            const {
                postId,
                subredditId,
                subredditName,
                postTitle,
                upvotes,
                comments} = action.payload;
            state.recentPosts[postId] = {
                postId,
                subredditId,
                subredditName,
                postTitle,
                upvotes,
                comments,
            };
        },
        addRecentCommunity: (state, action) => {
            const {communityId, communityName, avatar} = action.payload;
            state.recentCommunities[communityId] = {
                communityName,
                avatar,
            };
        },
    },
});

export {initialState};
export const {
    login,
    setTheme,
    selfInfo,
    logout,
    clearRecentPosts,
    addRecentPost,
    addRecentCommunity} = userSlice.actions;
export default userSlice.reducer;
