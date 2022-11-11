import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    profile: null,
    status: "Active",
    error: null
}

export const counterSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.profile = action.payload;
        }
    }
})

export const {
    setProfile
} = counterSlice.actions;

export default counterSlice.reducer;