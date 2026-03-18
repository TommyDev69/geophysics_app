import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";

import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
// import { resetErrAction, resetSuccessAction } from "../globalActions/globalActions";

// initialState
const initialState = {
    loading: false,
    error: null,
    users: [],
    user: null,
    success: false, // ✅ add this
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
    async ({ fullName, email, password, organisation }, { rejectWithValue, getState, dispatch }) => {
        try {
            // make the http request
            const res = await axios.post(`${baseUrl}/users/register`, {
                fullName,
                email,
                password,
                organisation,
            });
            // save user to local storage
            return res.data
        } catch (error) {
            console.log(error);

            return rejectWithValue(error?.response?.data);
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
            return rejectWithValue(error.response?.data?.message || error.message);
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
            state.user = action.payload;
            state.loading = false;
            state.success = true; // ✅ set success to true

        });
        builder.addCase(registerUserAction.rejected, (state, action) => {
            state.error = action.payload || action.error.message;
            state.loading = false;
        });

         // login
        builder.addCase(loginUserAction.pending, (state, action) =>{
            state.userAuth.loading = true;
        });
        builder.addCase(loginUserAction.fulfilled, (state, action) =>{
            state.userAuth.userInfo = action.payload;
            state.userAuth.loading = false;
        });
        builder.addCase(loginUserAction.rejected, (state, action) =>{
            state.userAuth.error = action.payload;
            state.userAuth.loading = false;
        });

    }
})

// generate reducers
const usersReducers = usersSlice.reducer;

export default usersReducers;