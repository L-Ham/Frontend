import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    displayName: '',
    email: '',
    about: '',
    avatarImage: '',
    bannerImage: '',
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
        setAvatar: (state, action)=>{
            state.avatarImage = action.payload.avatarImage;
        },
        setBanner: (state, action)=>{
            state.bannerImage = action.payload.bannerImage;
        },
    },
});

export {initialState};
export const {login, increaseKarma, setAvatar, setBanner} = userSlice.actions;
export default userSlice.reducer;
