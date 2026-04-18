import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { resetErrAction, resetSuccessAction } from "../globalActions/globalActions";

// initialState
const initialState = {
    loading: false,
    error: null,
    stories: [],
    story: null,
    success: false,
    successMessage: null,
};

export const createStoryAction = createAsyncThunk(
    "story/create",
    async ({ title, description, epic, priority, points, assigned }, { rejectWithValue, getState, dispatch }) => {
        try {
            const token = getState()?.users?.userAuth?.userInfo?.message?.token;
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };
            const res = await axios.post(`${baseUrl}/stories/create-story`, 
                
                {
                    title, description, 
                    epic, priority, 
                    points, assigned
                }, config);
            console.log(res.data, "story data");
            
            if (!res.data) {
                throw new Error(res.data.message || "Failed to create story");
            }
            
            return res.data.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message || error.message);
        }
    }
);

// fetch all stories action
export const fetchStoriesAction = createAsyncThunk(
    "story/fetchAll",
    async (payload, { rejectWithValue, getState, dispatch }) => {
        try {
            const token = getState()?.users?.userAuth?.userInfo?.message?.token;
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const res = await axios.get(`${baseUrl}/stories/all-stories`, config);
            // console.log(res.data, "Stories data");
            
            return res.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message || error.message);
        }
    }
);

const storySlice = createSlice({
    name: "stories",
    initialState,
    extraReducers: (builder) => {
        // Create Project
        builder.addCase(createStoryAction.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(createStoryAction.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.successMessage = action.payload?.message || action.payload?.messsage || "Story created";
            const storyData = action.payload?.data || action.payload?.messsage || action.payload?.message || null;
            state.story = storyData;
            if (storyData) {
                state.stories.push(storyData);
            }
        });
        builder.addCase(createStoryAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        });

        // Fetch all stories
        builder.addCase(fetchStoriesAction.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchStoriesAction.fulfilled, (state, action) => {
            state.loading = false;
            state.stories = action.payload?.message || [];
            state.error = null;
        });
        builder.addCase(fetchStoriesAction.rejected, (state, action) => {
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

const storyReducers = storySlice.reducer;

export default storyReducers;