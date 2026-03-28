import { configureStore } from "@reduxjs/toolkit";
import usersReducers from "../slice/user/usersSlice";
import surveyReducers from "../slice/survey/surveySlice";
import projectsReducers from "../slice/project/projectSlice";

const store = configureStore({
   reducer: {
    users: usersReducers,
    surveys: surveyReducers,
    projects: projectsReducers,
   }
})

export default store
