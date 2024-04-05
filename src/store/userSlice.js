import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    displayName: '',
    email: '',
    about: '',
    avatarImage: '',
    token: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token;
        },
        increaseKarma: (state) => {
            state.karma++;
        },
    },
});

export {initialState};
export const {login, increaseKarma} = userSlice.actions;
export default userSlice.reducer;
