import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
  status: "Active",
  error: null,
};

let user = null;

export const counterSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
      // console.log(state.profile);
      user = state.profile.user;
      console.log(user);
      postToken();
    },
  },
});

export const postToken = async () => {
  return await user;
};

export const { setProfile } = counterSlice.actions;

export default counterSlice.reducer;
