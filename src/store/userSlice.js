import {createSlice} from '@reduxjs/toolkit';
import {recentPostsData} from '../pages/PopularPage/RightSideBar/data.js';

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
    recentPosts: recentPostsData,
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
            console.log('in logout', action.payload.theme);
        },
        clearRecentPosts: (state) => {
            state.recentPosts = [];
        },
    },
});

export {initialState};
export const {login, setTheme, selfInfo, logout, clearRecentPosts} = userSlice.actions;
export default userSlice.reducer;
