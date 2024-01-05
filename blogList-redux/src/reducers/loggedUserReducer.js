import { createSlice } from "@reduxjs/toolkit";

const loggedUserSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser(state, action) {
      return action.payload;
    },
    clearUser(state) {
      return null;
    },
  },
});

export const { setUser, clearUser } = loggedUserSlice.actions;
export default loggedUserSlice.reducer;
