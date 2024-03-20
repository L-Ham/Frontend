import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    username: '',
    email: '',
    age: 0,
    karma: 0,
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.age = action.payload.age;
            state.karma = action.payload.karma;
        },
        increaseKarma: (state) => {
            state.karma++;
        },
    },
});

export {initialState};
export const {login, increaseKarma} = userSlice.actions;
export default userSlice.reducer;
