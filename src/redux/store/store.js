import { configureStore } from "@reduxjs/toolkit";
import usersReducers from "../slice/user/usersSlice";
import surveyReducers from "../slice/survey/surveySlice";

const store = configureStore({
   reducer: {
    users: usersReducers,
    surveys: surveyReducers,
   }
})

export default store
