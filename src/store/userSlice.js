import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    id: '',
    displayName: '',
    commentKarma: 0,
    postKarma: 0,
    created: 0,
    avatar: '',
    about: '',
    token: '',
    theme: 'light',
    email: '',
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
        selfInfo: (state, action) => {
            state.id = action.payload.id;
            state.displayName = action.payload.displayName;
            state.commentKarma = action.payload.commentKarma;
            state.postKarma = action.payload.postKarma;
            state.created = action.payload.created;
            state.avatar = action.payload.avatar;
        },
    },
});

export {initialState, token};
export const {login, setAvatar, setTheme, selfInfo} = userSlice.actions;
export default userSlice.reducer;
