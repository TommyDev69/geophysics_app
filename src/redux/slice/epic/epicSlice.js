import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { resetErrAction, resetSuccessAction } from "../globalActions/globalActions";

const initialState = {
    loading: false,
    error: null,
    epics: [],
    epic: null,
    success: false,
    successMessage: null,
};

// CREATE EPIC
export const createEpicAction = createAsyncThunk(
    "epic/create",
    async (
        { title, description, priority, project },
        { rejectWithValue, getState }
    ) => {
        try {
            const token =
                getState()?.users?.userAuth?.userInfo?.message?.token;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };

            const res = await axios.post(
                `${baseUrl}/epics/create-epic`,
                { title, description, priority, project },
                config
            );

            if (res.data.status !== "Success") {
                throw new Error(res.data.message || "Failed to create epic");
            }

            return res.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || error.message
            );
        }
    }
);

// FETCH ALL EPICS
export const fetchEpicsAction = createAsyncThunk(
    "epic/fetchAll",
    async (_, { rejectWithValue, getState }) => {
        try {
            const token =
                getState()?.users?.userAuth?.userInfo?.message?.token;

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const res = await axios.get(
                `${baseUrl}/epics/all-epics`,
                config
            );

            return res.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || error.message
            );
        }
    }
);

const epicSlice = createSlice({
    name: "epics",
    initialState,
    extraReducers: (builder) => {

        // CREATE EPIC
        builder.addCase(createEpicAction.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(createEpicAction.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;

            state.successMessage =
                action.payload?.message || "Epic created successfully";

            const epicData = action.payload?.data;

            state.epic = epicData;

            if (epicData) {
                state.epics.push(epicData);
            }
        });

        builder.addCase(createEpicAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        });

        // FETCH EPICS
        builder.addCase(fetchEpicsAction.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(fetchEpicsAction.fulfilled, (state, action) => {
            state.loading = false;
            state.epics = action.payload?.data || [];
            state.error = null;
        });

        builder.addCase(fetchEpicsAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        // RESET STATES
        builder.addCase(resetErrAction.pending, (state) => {
            state.error = null;
        });

        builder.addCase(resetSuccessAction.pending, (state) => {
            state.success = false;
            state.successMessage = null;
        });
    },
});

export default epicSlice.reducer;