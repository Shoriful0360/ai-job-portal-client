import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { auth } from "../../firebase config";

// Initial state
const initialState = {
    user: null,
    loading: true, 
    error: null,
};

const provider = new GoogleAuthProvider();

// Async actions
export const googleLogin = createAsyncThunk("auth/googleLogin", async (_, { rejectWithValue }) => {
    try {
        const result = await signInWithPopup(auth, provider);
        return result.user;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const createUser = createAsyncThunk("auth/createUser", async ({ email, password }, { rejectWithValue }) => {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        return result.user;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const login = createAsyncThunk("auth/login", async ({ email, password }, { rejectWithValue }) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        return result.user;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const logout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
    try {
        await signOut(auth);
        return null;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

// Redux Slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.loading = false; 
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(googleLogin.pending, (state) => { state.loading = true; })
            .addCase(googleLogin.fulfilled, (state, action) => { state.user = action.payload; state.loading = false; })
            .addCase(googleLogin.rejected, (state, action) => { state.error = action.payload; state.loading = false; })
            .addCase(createUser.pending, (state) => { state.loading = true; })
            .addCase(createUser.fulfilled, (state, action) => { state.user = action.payload; state.loading = false; })
            .addCase(createUser.rejected, (state, action) => { state.error = action.payload; state.loading = false; })
            .addCase(login.pending, (state) => { state.loading = true; })
            .addCase(login.fulfilled, (state, action) => { state.user = action.payload; state.loading = false; })
            .addCase(login.rejected, (state, action) => { state.error = action.payload; state.loading = false; })
            .addCase(logout.fulfilled, (state) => { state.user = null; state.loading = false; });
    },
});

// **onAuthStateChanged Function**
export const initializeAuth = () => (dispatch) => {
    onAuthStateChanged(auth, (user) => {
        dispatch(setUser(user)); 
    });
};

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
