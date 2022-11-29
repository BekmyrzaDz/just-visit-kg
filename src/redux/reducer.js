import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    profile: null,
    status: false,
    error: null
}

export const counterSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.profile = action.payload;
            state.status = !!action.payload;
        }
    }
})

export const {
    setProfile
} = counterSlice.actions;

export default counterSlice.reducer;