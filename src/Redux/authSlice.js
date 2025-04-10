import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase config";

// signup
export const signUp=createAsyncThunk(
    'auth/signUp',
    async({email,password},{rejectWithValue})=>{

        try{
            const userCredential=await createUserWithEmailAndPassword(auth,email,password);
            return userCredential.user
        }catch(error){
            return rejectWithValue(error.message)
        }

    }
)


// login
export const login=createAsyncThunk(
    "auth/login",

    async({email,password},{rejectWithValue})=>{
        try{
            const userCredential=await signInWithEmailAndPassword(auth,email,password);
            return userCredential.user
        }catch(error){
            return rejectWithValue(error.message)
        }
    }
)
// login with google

export const googleLogin=createAsyncThunk(
    'auth/googleLogin',
    async(_,{rejectWithValue})=>{
        try{
            const result=await signInWithPopup(auth,googleProvider)
            return result.user
        }catch(error){
            return rejectWithValue(error.message)
        }
    }
)
