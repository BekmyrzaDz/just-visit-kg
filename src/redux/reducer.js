import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
  status: "Active",
  error: null,
};

let user;

export const postToken = async () => {
  return await user;
};

export const counterSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
      // console.log(state.profile);
      user = state.profile.user.access_token;
      console.log(user);
      // postToken();
    },
  },
});

export const { setProfile } = counterSlice.actions;

export default counterSlice.reducer;
