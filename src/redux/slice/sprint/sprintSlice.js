import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { resetErrAction, resetSuccessAction } from "../globalActions/globalActions";

// initialState
const initialState = {
    loading: false,
    error: null,
    sprints: [],
    sprint: null,
    success: false,
    successMessage: null,
};

// Create sprint action
export const createSprintAction = createAsyncThunk(
    "sprint/create",
    async ({ title, description, priority, startDate, endDate, project }, { rejectWithValue, getState, dispatch }) => {
        try {
            const token = getState()?.users?.userAuth?.userInfo?.message?.token;
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };
            const res = await axios.post(`${baseUrl}/sprints/create-sprint`, 
                {
                    title, 
                    description, 
                    priority, 
                    startDate, 
                    endDate, 
                    project
                }, 
                config
            );
            console.log(res.data, "sprint data");
            
            if (!res.data) {
                throw new Error(res.data.message || "Failed to create sprint");
            }
            
            return res.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message || error.message);
        }
    }
);

// Fetch all sprints action
export const fetchAllSprintsAction = createAsyncThunk(
    "sprint/fetchAll",
    async (payload, { rejectWithValue, getState, dispatch }) => {
        try {
            const token = getState()?.users?.userAuth?.userInfo?.message?.token;
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const res = await axios.get(`${baseUrl}/sprints/all-sprints`, config);
            console.log(res.data, "all sprints data");
            
            return res.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message || error.message);
        }
    }
);

// Fetch sprints by project ID
export const fetchSprintsByProjectAction = createAsyncThunk(
    "sprint/fetchByProject",
    async (projectId, { rejectWithValue, getState, dispatch }) => {
        try {
            const token = getState()?.users?.userAuth?.userInfo?.message?.token;
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const res = await axios.get(`${baseUrl}/sprints/project/${projectId}`, config);
            console.log(res.data, "sprints by project");
            
            return res.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message || error.message);
        }
    }
);

// Get single sprint
export const getSingleSprintAction = createAsyncThunk(
    "sprint/fetchSingle",
    async (sprintId, { rejectWithValue, getState }) => {
        try {
            const token = getState()?.users?.userAuth?.userInfo?.message?.token;
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const res = await axios.get(`${baseUrl}/sprints/single-sprint/${sprintId}`, config);
            
            return res.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message || error.message);
        }
    }
);

const sprintSlice = createSlice({
    name: "sprints",
    initialState,
    extraReducers: (builder) => {
        // Create Sprint
        builder.addCase(createSprintAction.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(createSprintAction.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.successMessage = action.payload?.message || "Sprint created successfully";
            const sprintData = action.payload?.sprint || action.payload?.message;
            state.sprint = sprintData;
            if (sprintData) {
                state.sprints.push(sprintData);
            }
        });
        builder.addCase(createSprintAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        });

        // Fetch all sprints
        builder.addCase(fetchAllSprintsAction.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchAllSprintsAction.fulfilled, (state, action) => {
            state.loading = false;
            state.sprints = action.payload?.message || [];
            state.error = null;
        });
        builder.addCase(fetchAllSprintsAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        // Fetch sprints by project
        builder.addCase(fetchSprintsByProjectAction.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchSprintsByProjectAction.fulfilled, (state, action) => {
            state.loading = false;
            state.sprints = action.payload?.message || [];
            state.error = null;
        });
        builder.addCase(fetchSprintsByProjectAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        // Get single sprint
        builder.addCase(getSingleSprintAction.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getSingleSprintAction.fulfilled, (state, action) => {
            state.loading = false;
            state.sprint = action.payload?.message;
            state.error = null;
        });
        builder.addCase(getSingleSprintAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        // Reset error and success
        builder.addCase(resetErrAction.pending, (state) => {
            state.error = null;
        });
        builder.addCase(resetSuccessAction.pending, (state) => {
            state.success = false;
            state.successMessage = null;
        });
    }
});

const sprintReducers = sprintSlice.reducer;

export default sprintReducers;
