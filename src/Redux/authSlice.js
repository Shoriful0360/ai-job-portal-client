import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth, googleProvider } from "../../firebase config";




// create signup

export const signUp=createAsyncThunk(
    'auth/signUp',
    async({email,password},{rejectWithValue})=>{
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Return only serializable user data
            return {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName || "",
                photoURL: user.photoURL || "",
            };
        }catch(error){
            return rejectWithValue(error.message)
        }
    }
)

// login 
export const login=createAsyncThunk(
    'auth/login',
    async({email,password},{rejectWithValue})=>{
        try{
            const userCredential=await signInWithEmailAndPassword(auth,email,password);
            return userCredential.user
        }catch(error){
        return rejectWithValue (error.message)
        }
    }
)


// login with google

export const googleLogin=createAsyncThunk(
    'auth/googleLogin',
    async(_,{rejectWithValue})=>{
        try{
            const result=await signInWithPopup(auth,googleProvider);
           return result.user;
        }catch(error){
            return rejectWithValue(error.message)
        }


    }
)

// logout

export const logout=createAsyncThunk(
    'auth/logout',
    async(_,{rejectWithValue})=>{
        try{
            await signOut(auth)
            return null
        }catch(error){
            return rejectWithValue(error.message)
        }
    }
)


// profile update
export const profileUpdate = createAsyncThunk(
    'auth/profileUpdate',
    async ({ displayName, photoURL }, { rejectWithValue }) => {
      try {
        if (!auth.currentUser) {
          return rejectWithValue("No user logged in");
        }
  
        await updateProfile(auth.currentUser, {
          displayName,
          photoURL,
        });

        return {
          displayName: auth.currentUser.displayName,
          photoURL: auth.currentUser.photoURL,
        };
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  

// check auth state

export const checkAuthState=createAsyncThunk(
    'auth/checkAuthState',
    async(_,{rejectWithValue})=>{
        try{
            return new Promise((resolve)=>{
                const unsubscribe=onAuthStateChanged(auth,(user)=>{
                    unsubscribe()
                    resolve(user || null);
                })
            })
        }catch(error){
            return rejectWithValue(error.message)
        }
    }
)

const authSlice=createSlice({
    name:'auth',
    initialState:{
        user:null,
        loading:false,
        error:null,
        password:''
     
    },
    reducers:{
        setPassword:(state,action)=>{
            state.password=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
//   signup
    
        .addCase(signUp.fulfilled,(state,action)=>{
            state.user=action.payload;
            state.loading=false;
            
        })
        .addCase(signUp.rejected,(state,action)=>{
            state.error=action.payload
            state.loading=false
        })
    

        // login
        .addCase(login.pending,(state)=>{
            state.loading=true;
            state.error=null
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.user=action.payload
            state.loading=false;
          
        })
        .addCase(login.rejected,(state,action)=>{
            state.error=action.payload
            state.loading=false;
        })

        // google login
        .addCase(googleLogin.pending,(state)=>{

            state.loading=true;
            state.error=null;
        })
        .addCase(googleLogin.fulfilled,(state,action)=>{

            state.loading=false;
            state.user=action.payload;
        })
        .addCase(googleLogin.rejected,(state,action)=>{

            state.loading=false;
            state.error=action.payload;
        })

        // update profile
        .addCase(profileUpdate.fulfilled, (state, action) => {
            state.loading = false;
            if (state.user) {
              state.user.displayName = action.payload.displayName;
              state.user.photoURL = action.payload.photoURL;
            }
          })
          
        // logout
        .addCase(logout.fulfilled,(state)=>{
            state.user=null;
        })

        // Check auth state 
        .addCase(checkAuthState.pending,(state)=>{
            state.loading=true;
        })
        .addCase(checkAuthState.fulfilled,(state,action)=>{
            state.loading=false;
            state.user=action.payload;
        })
        .addCase(checkAuthState.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload
        })
    }
})

export const{setPassword}=authSlice.actions
export default authSlice.reducer;