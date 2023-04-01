import axios from "axios"
const API = axios.create({baseURL : "http://localhost:4000"});
export const signIn =  (formData) => {
    return API.post("/login" , formData)
}
export const register =  (formData) => {
    return API.post("/register" , formData)
}
export const googleLogin =  (formData) => {
    return API.post("/glogin" , formData)
}
export const bookbed =  (formData) => {
    return API.post("/bookbed" , formData)
} 
export const bookappointment = (formData)=>{
    return API.post("/bookappointment", formData)
}

