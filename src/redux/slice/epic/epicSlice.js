import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { resetErrAction, resetSuccessAction } from "../globalActions/globalActions";

// initialState
const initialState = {
    loading: false,
    error: null,
    epics: [],
    epic: null,
    success: false,
    successMessage: null,
};

export const createEpicAction = createAsyncThunk(
    "epic/create",
    async ({ title, description, priority }, { rejectWithValue, getState, dispatch }) => {
        try {
            const token = getState()?.users?.userAuth?.userInfo?.message?.token;
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };
            const res = await axios.post(`${baseUrl}/epics/create-epic`, 
                {
                    title, description, priority
                }, config);
            console.log(res.data, "epic data");
            
            return res.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message || error.message);
        }
    }
);

const epicSlice = createSlice({
    name: "epics",
    initialState,
    extraReducers: (builder) => {
        // Create Project
        builder.addCase(createEpicAction.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(createEpicAction.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.successMessage = action.payload?.message || "Epic created";
            // Backend returns response with 'data' field
            state.epic = action.payload?.data || null;
            if (action.payload?.data) {
                state.epics.push(action.payload.data);
            }
        });
        builder.addCase(createEpicAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
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

const epicReducers = epicSlice.reducer;

export default epicReducers;