import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
  status: false,
  error: null,
};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
      state.status = !!action.payload;
      console.log(action.payload);

      const token = {
        access: state.profile.user.access_token,
        refresh: state.profile.user.refresh_token,
      };

      localStorage.setItem("token", JSON.stringify(token));
    },
  },
});

export const { setProfile } = counterSlice.actions;

export default counterSlice.reducer;
