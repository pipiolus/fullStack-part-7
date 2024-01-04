import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    message: "",
    type: null,
  },
  reducers: {
    setMessage(state, action) {
      return {
        message: action.payload.message,
        type: action.payload.type,
      };
    },
    clearMessage() {
      return {
        message: "",
        type: null,
      };
    },
  },
});

export const { setMessage, clearMessage } = notificationSlice.actions;

export const setNotification = (message, type, timeout) => {
  return (dispatch) => {
    dispatch(setMessage({ message, type }));
    setTimeout(() => {
      dispatch(clearMessage());
    }, timeout * 1000);
  };
};

export default notificationSlice.reducer;
