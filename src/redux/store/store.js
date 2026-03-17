import { configureStore } from "@reduxjs/toolkit";
import usersReducers from "../slice/user/usersSlice";
// import usersReducers from "../slices/user/userSlice";



const store = configureStore({
   reducer: {
    users: usersReducers,
   }
})

export default store
