import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import * as api from "../api"
export const login  = createAsyncThunk("auth/login", async ({formValue, history})=>{
    try {
        const response = await api.signIn(formValue);
        if(response?.data?.email){

            history.push("/");
        }
        else{
            window.alert("Invalid credentials")
        }
        // window.location.reload(false)
        return response.data;
    } catch (error) {
       console.log(error) 
    }
})
export const register  = createAsyncThunk("auth/register", async ({formValue, history})=>{
    try {
        const response = await api.register(formValue);
        history.push("/login");
 

        // window.alert("SuceesFully Regitered")
        return response.data;
    } catch (error) {
       console.log(error) 
    }
})
export const bookbed  = createAsyncThunk("auth/bed", async ({formValue, history})=>{
    try {
        const response = await api.bookbed(formValue);
        history.push("/");
        // window.alert("SuceesFully Regitered")
        return response.data;
    } catch (error) {
       console.log(error) 
    }
})
export const glogin  = createAsyncThunk("auth/glogin", async ({formValue, history})=>{
    try {
        const response = await api.googleLogin(formValue);
        history.push("/");
        // window.alert("SuceesFully Regitered")
        return response.data;
    } catch (error) {
       console.log(error) 
    }
})


export const logout  = createAsyncThunk("auth/logout", async ({history})=>{
    history.push('/login')
    localStorage.clear()
})
const userSlice = createSlice({
    name :  "user",
    initialState:{
        user:null,
        appointment:null,
        bed:null,
        error:"",
        loading:false,
        status:false,
    }, 
     extraReducers:{
        [login.pending]:(state,action)=>
        {
            state.loading = true;
            state.status=false;
        },
        [login.fulfilled]:(state,action)=>
        {
            state.loading = false;
            localStorage.setItem("user", JSON.stringify({...action.payload}));
            state.user = action.payload;
            if(action?.payload?.email){
            state.status=true;
            }
            else{
                state.status=false;

            }
        },
        [login.rejected]:(state,action)=>
        {
            state.loading = false;
            state.error = action.payload.message;
            state.status=false;

        },
        [register.pending]:(state,action)=>
        {
            state.loading = true;
        },
        [register.fulfilled]:(state,action)=>
        {
            state.loading = false;
            // localStorage.setItem("user", JSON.stringify({...action.payload}));
            // state.user = action.payload;
        },
        [register.rejected]:(state,action)=>
        {
            state.loading = false;
            state.error = action.payload.message;
        },
        
        [glogin.pending]:(state,action)=>
        {
            state.loading = true;
        },
        [glogin.fulfilled]:(state,action)=>
        {
            state.loading = false;
            localStorage.setItem("user", JSON.stringify({...action.payload}));
            state.user = action.payload;
            state.status=true;

        },
        [glogin.rejected]:(state,action)=>
        {
            state.loading = false;
            state.error = action.payload.message;
        },
        
        [logout.pending]:(state,action)=>
        {
            state.loading = true;

        },
        [logout.fulfilled]:(state,action)=>
        {
            state.loading = false;
            state.user = null;
            state.status=false;
        },
        [logout.rejected]:(state,action)=>
        {
            state.loading = false;
            state.status=true;

        },
     }
})
export default userSlice.reducer;