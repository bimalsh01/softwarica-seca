import axios from "axios";

const Api = axios.create({
    baseURL : "http://localhost:5000",
    withCredentials : true,
    headers :{
        "Content-Type" : "multipart/form-data",
    }
})

export const testApi = () => Api.get("/test")
// http://localhost:5000/test

// create user api
export const createUserApi = (data) => Api.post('/api/user/create', data)

// Login user Api
export const loginUserApi = (data) =>  Api.post('/api/user/login', data)

// Create product API
export const createProductApi = (data) => Api.post('/api/product/create_product', data)
