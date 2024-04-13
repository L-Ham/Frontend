import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    displayName: '',
    email: '',
    about: '',
    avatarImage: '',
    bannerImage: '',
    postKarma: '',
    commentKarma: '',
    createdAt: '',
    token: '',
    theme: 'light',
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
        setAvatar: (state, action)=>{
            state.avatarImage = action.payload.avatarImage;
        },
        setBanner: (state, action)=>{
            state.bannerImage = action.payload.bannerImage;
        },
        setPostKarma: (state, action)=>{
            state.postKarma=action.payload.postKarma;
        },
        setCommentKarma: (state, action)=>{
            state.commentKarma=action.payload.commentKarma;
        },
        setCreatedAt: (state, action)=>{
            state.createdAt=action.payload.createdAt;
        },
        setTheme: (state, action) => {
            state.theme = action.payload.theme;
        },
    },
});

export {token};
export {initialState};
export const {login, setAvatar, setBanner, setPostKarma, setCommentKarma, setCreatedAt, setTheme} = userSlice.actions;
export default userSlice.reducer;
