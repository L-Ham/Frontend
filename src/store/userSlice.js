import {createSlice} from '@reduxjs/toolkit';
import {recentPostsData} from '../pages/PopularPage/RightSideBar/data.js';

const initialState = {
    displayName: '',
    email: '',
    about: '',
    avatarImage: '',
    token: '',
    theme: 'light',
    recentPosts: recentPostsData,
};
let token = null;
const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token;
            token = action.payload.token;
        },
        setAvatar: (state, action) => {
            state.avatarImage = action.payload.avatarImage;
        },
        setTheme: (state, action) => {
            state.theme = action.payload.theme;
        },
        clearRecentPosts: (state) => {
            state.recentPosts = [];
        },
    },
});

export {initialState, token};
export const {login, setAvatar, setTheme, clearRecentPosts} = userSlice.actions;
export default userSlice.reducer;
