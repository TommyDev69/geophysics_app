import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { resetErrAction, resetSuccessAction } from "../globalActions/globalActions";

// initialState
const initialState = {
    loading: false,
    error: null,
    surveys: [],
    survey: null,
    success: false,
    successMessage: null,
};

// Create Survey Action
export const createSurveyAction = createAsyncThunk(
    "surveys/create",
    async (surveyData, { rejectWithValue, getState, dispatch }) => {
        try {
            const token = getState()?.users?.userAuth?.userInfo?.message?.token;
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };
            const res = await axios.post(`${baseUrl}/surveys/create-survey`, surveyData, config);
            return res.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message || error.message);
        }
    }
);

// Get User Surveys Action
export const getUserSurveysAction = createAsyncThunk(
    "surveys/getUserSurveys",
    async (_, { rejectWithValue, getState }) => {
        try {
            const token = getState()?.users?.userAuth?.userInfo?.message?.token;
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const res = await axios.get(`${baseUrl}/surveys`, config);
            return res.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message || error.message);
        }
    }
);

// Get Single Survey Action
export const getSurveyAction = createAsyncThunk(
    "surveys/getSurvey",
    async (id, { rejectWithValue, getState }) => {
        try {
            const token = getState()?.users?.userAuth?.userInfo?.message?.token;
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const res = await axios.get(`${baseUrl}/surveys/${id}`, config);
            return res.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message || error.message);
        }
    }
);

// Update Survey Action
export const updateSurveyAction = createAsyncThunk(
    "surveys/update",
    async (payload, { rejectWithValue, getState }) => {
        try {
            const { id, surveyData } = payload;
            const {
                latitude,
                longitude,
                vegetationDensity,
                ambientNoise,
                targetDepthRange,
                layoutPattern,
                stationSpacing,
                lineSpacing,
            } = surveyData;

            const token = getState()?.users?.userAuth?.userInfo?.message?.token;
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };
            const res = await axios.put(`${baseUrl}/surveys/update/${id}`, {
                // surveyName,
                latitude,
                longitude,
                vegetationDensity,
                ambientNoise,
                targetDepthRange,
                layoutPattern,
                stationSpacing,
                lineSpacing,
            }, config);
            console.log(res.data.survey);


            return res.data.survey;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message || error.message);
        }
    }
);

// Delete Survey Action
export const deleteSurveyAction = createAsyncThunk(
    "surveys/delete",
    async (id, { rejectWithValue, getState }) => {
        try {
            const token = getState()?.users?.userAuth?.userInfo?.message?.token;
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const res = await axios.delete(`${baseUrl}/surveys/${id}`, config);
            return res.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message || error.message);
        }
    }
);

const surveySlice = createSlice({
    name: "surveys",
    initialState,
    extraReducers: (builder) => {
        // Create Survey
        builder.addCase(createSurveyAction.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(createSurveyAction.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.successMessage = action.payload.message;
            state.survey = action.payload.survey;
            state.surveys.push(action.payload.survey);
        });
        builder.addCase(createSurveyAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        });

        // Get User Surveys
        builder.addCase(getUserSurveysAction.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getUserSurveysAction.fulfilled, (state, action) => {
            state.loading = false;
            state.surveys = action.payload.message;
        });
        builder.addCase(getUserSurveysAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        // Get Single Survey
        builder.addCase(getSurveyAction.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getSurveyAction.fulfilled, (state, action) => {
            state.loading = false;
            state.survey = action.payload.message;
        });
        builder.addCase(getSurveyAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        // Update Survey
        builder.addCase(updateSurveyAction.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(updateSurveyAction.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.successMessage = action.payload.message;
            if (action.payload.survey) {
                state.survey = action.payload.survey;
                // Update in surveys array
                const index = state.surveys.findIndex(s => s._id === action.payload.survey._id);
                if (index !== -1) {
                    state.surveys[index] = action.payload.survey;
                }
            }
        });
        builder.addCase(updateSurveyAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        });

        // Delete Survey
        builder.addCase(deleteSurveyAction.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(deleteSurveyAction.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.successMessage = action.payload.message;
            // Remove from surveys array
            state.surveys = state.surveys.filter(s => s._id !== action.meta.arg);
        });
        builder.addCase(deleteSurveyAction.rejected, (state, action) => {
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
    },
});

// Generate reducers
const surveyReducers = surveySlice.reducer;

export default surveyReducers;