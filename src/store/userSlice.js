import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    id: '',
    displayName: '',
    bannerImage: '',
    postKarma: '',
    commentKarma: '',
    created: 0,
    avatar: '',
    token: '',
    theme: 'light',
    about: '',
    email: '',
};
const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token;
        },
        setAvatar: (state, action)=>{
            state.avatarImage = action.payload.avatarImage;
        },
        setBanner: (state, action)=>{
            state.bannerImage = action.payload.bannerImage;
        },
        setTheme: (state, action) => {
            state.theme = action.payload.theme;
        },
        selfInfo: (state, action) => {
            state.id = action.payload.id;
            state.displayName = action.payload.displayName;
            state.commentKarma = action.payload.commentKarma;
            state.postKarma = action.payload.postKarma;
            state.created = action.payload.created;
            state.avatar = action.payload.avatar;
        },
        logout: (state) => {
            Object.assign(state, initialState);
            token = null;
        },
    },
});

export {initialState};
export const {login, setAvatar, setBanner, setTheme, selfInfo, logout} = userSlice.actions;
export default userSlice.reducer;
