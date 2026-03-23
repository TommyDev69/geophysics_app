import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";

import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { resetErrAction, resetSuccessAction } from "../globalActions/globalActions";
// import { resetErrAction, resetSuccessAction } from "../globalActions/globalActions";

// initialState
const initialState = {
    loading: false,
    error: null,
    users: [],
    user: null,
    success: false, // ✅ add this
    successMessage: null,
    profile: {},
    userAuth: {
        loading: false,
        error: null,
        userInfo: localStorage.getItem("userInfo")
            ? JSON.parse(localStorage.getItem("userInfo"))
            : null,
    }
}

// register Action
export const registerUserAction = createAsyncThunk("users/register",
    async ({ fullName, email, password, organisation, role }, { rejectWithValue, getState, dispatch }) => {
        try {
            // make the http request
            const res = await axios.post(`${baseUrl}/users/register`, {
                fullName,
                email,
                password,
                organisation,
                role,
            });
            // return the response data
            return res.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error?.response?.data?.message || error.message);
        }
    }
);

// login Action
export const loginUserAction = createAsyncThunk(
    "users/login",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`${baseUrl}/users/login`, { email, password }, {
                headers: { "Content-Type": "application/json" },
            });
            // Save in localStorage
            localStorage.setItem("userInfo", JSON.stringify(data));
            return data; // ✅ must return the whole data object
        } catch (error) {
            return rejectWithValue(error.response?.data.message || error.message);
        }
    }
);

const usersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {
        // handle Action

        // register
        builder.addCase(registerUserAction.pending, (state, action) => {
            state.loading = true;
        });

        builder.addCase(registerUserAction.fulfilled, (state, action) => {
            state.user = action.payload.user; // user data
            state.successMessage = action.payload.message; // success message
            state.loading = false;
            state.success = true;
            state.error = null; // clear any previous errors
        });
        builder.addCase(registerUserAction.rejected, (state, action) => {
            state.error = action.payload || action.error.message;
            state.loading = false;
            state.success = false;
            state.successMessage = null;
        });

        // login
        builder.addCase(loginUserAction.pending, (state) => {
            state.userAuth.error = null; // clear previous errors
        });

        builder.addCase(loginUserAction.fulfilled, (state, action) => {
            state.userAuth.userInfo = action.payload;
            state.userAuth.error = null;
            state.userAuth.success = true;
        });

        builder.addCase(loginUserAction.rejected, (state, action) => {
            state.userAuth.error = action.payload || action.error.message;
            state.userAuth.success = false;
        });

        // reset Err Action
        builder.addCase(resetErrAction.pending, (state) => {
            state.error = null
        });

        builder.addCase(resetSuccessAction.pending, (state) => {
            state.error = null
        })

    }
});

// generate reducers
const usersReducers = usersSlice.reducer;

export default usersReducers;