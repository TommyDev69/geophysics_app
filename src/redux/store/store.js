import { configureStore } from "@reduxjs/toolkit";
import usersReducers from "../slice/user/usersSlice";
import surveyReducers from "../slice/survey/surveySlice";
import projectsReducers from "../slice/project/projectSlice";
import epicReducers from "../slice/epic/epicSlice";

const store = configureStore({
   reducer: {
    users: usersReducers,
    surveys: surveyReducers,
    projects: projectsReducers,
    epics: epicReducers,
   }
})

export default store
