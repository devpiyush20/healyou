import axios from "axios"
const API = axios.create({baseURL : "https://healyou1.onrender.com"});
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

