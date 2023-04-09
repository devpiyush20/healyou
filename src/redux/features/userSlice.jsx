import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import * as api from "../api"
import {toast} from "react-toastify"
export const login  = createAsyncThunk("auth/login", async ({formValue, history})=>{
    try {
        const response = await api.signIn(formValue);
        if(response?.data?.email){

            history.push("/");
            toast.success("Loged In successfully")
        }
        else{
            toast.error("Invalid credentials")
        }
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
        toast.success("Bed booked successfully")
        return response.data;
    } catch (error) {
       console.log(error) 
    }
})
export const docreview = createAsyncThunk("auth/docreview", async ({formValue, history})=>{
    try {
        const response = await api.docreview(formValue);
        toast.success("Review Added successfully")
        return response.data;
    } catch (error) {
       console.log(error) 
    }
})
export const hosdoc = createAsyncThunk("auth/hosdoc", async ({formValue, history})=>{
    try {
        const response = await api.hosdoc(formValue);
        toast.success("Doctor Added Successfully")
        return response.data;
    } catch (error) {
       console.log(error) 
    }
})
export const hosreview = createAsyncThunk("auth/hosreview", async ({formValue, history})=>{
    try {
        const response = await api.hosreview(formValue);
        toast.success("Review Added successfully")
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
export const bookappointment = createAsyncThunk("/bookappointment", async({formValue, history})=>
{
try {
    const res = await api.bookappointment(formValue)
    history.push("/")
    toast.success("Appointment Booked! Check your mail for further details ✅")
    return res.data
} catch (error) {
    console.log(error) 

}
})
export const addroom = createAsyncThunk("auth/addroom", async ({formValue, history})=>{
    try {
        const response = await api.addroom(formValue);
        toast.success("Room Added successfully")
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
        [bookbed.pending]:(state,action)=>
        {
            state.loading = true;

        },
        [bookbed.fulfilled]:(state,action)=>
        {
            state.loading = false;
            localStorage.setItem("user", JSON.stringify({...action.payload}));
            state.user = action.payload;
        },
        [bookbed.rejected]:(state,action)=>
        {
            state.loading = false;
        },
        [bookappointment.pending]:(state,action)=>
        {
            state.loading = true;

        },
        [bookappointment.fulfilled]:(state,action)=>
        {
            state.loading = false;
            localStorage.setItem("user", JSON.stringify({...action.payload}));
            state.user = action.payload;
        },
        [bookappointment.rejected]:(state,action)=>
        {
            state.loading = false;
        },
        [hosdoc.pending]:(state,action)=>
        {
            state.loading = true;

        },
        [hosdoc.fulfilled]:(state,action)=>
        {
            state.loading = false;
            localStorage.setItem("user", JSON.stringify({...action.payload}));
            state.user = action.payload;
        },
        [hosdoc.rejected]:(state,action)=>
        {
            state.loading = false;
        },
        [addroom.pending]:(state,action)=>
        {
            state.loading = true;

        },
        [addroom.fulfilled]:(state,action)=>
        {
            state.loading = false;
            localStorage.setItem("user", JSON.stringify({...action.payload}));
            state.user = action.payload;
        },
        [addroom.rejected]:(state,action)=>
        {
            state.loading = false;
        },
     }
})
export default userSlice.reducer;