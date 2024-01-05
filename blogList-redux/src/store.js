import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./reducers/blogsReducer";
import notificationReducer from "./reducers/notificationReducer";
import loggedUserReducer from "./reducers/loggedUserReducer";
import usersReducer from "./reducers/usersReducer";

const store = configureStore({
  reducer: {
    loggedUser: loggedUserReducer,
    blogs: blogsReducer,
    users: usersReducer,
    notification: notificationReducer,
  },
});

export default store;
