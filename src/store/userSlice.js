import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    displayName: '',
    email: '',
    about: '',
    avatarImage: '',
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
        setAvatar: (state, action) => {
            state.avatarImage = action.payload.avatarImage;
        },
        setTheme: (state, action) => {
            state.theme = action.payload.theme;
        },
    },
});

export {initialState, token};
export const {login, setAvatar, setTheme} = userSlice.actions;
export default userSlice.reducer;
