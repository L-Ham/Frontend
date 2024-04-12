import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    displayName: '',
    email: '',
    about: '',
    avatarImage: '',
    token: '',
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
    },
});

export {initialState, token};
export const {login, setAvatar} = userSlice.actions;
export default userSlice.reducer;
