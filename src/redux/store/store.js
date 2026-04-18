import { configureStore } from "@reduxjs/toolkit";
import usersReducers from "../slice/user/usersSlice";
import surveyReducers from "../slice/survey/surveySlice";
import projectsReducers from "../slice/project/projectSlice";
import epicReducers from "../slice/epic/epicSlice";
import sprintReducers from "../slice/sprint/sprintSlice";
import storyReducers from "../slice/story/storySlice";

const store = configureStore({
   reducer: {
    users: usersReducers,
    surveys: surveyReducers,
    projects: projectsReducers,
    epics: epicReducers,
    sprints: sprintReducers,
    stories: storyReducers,
   }
})

export default store
