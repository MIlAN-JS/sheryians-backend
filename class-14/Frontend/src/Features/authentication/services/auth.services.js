import React from "react";
import axios from "axios"

// creating instance of axios

const api = axios.create({
    baseURL : "http://localhost:3000/api/authentication",
    withCredentials : true
})



const loginUser = async(email , password)=>{

    try {

        const response = await api.post("/login",{email , password})
        return response.data; 
        
    } catch (error) {
        throw error
        
    }

}

const registerUser = async (email , password , userName)=>{
    try {

    const response = await api.post("/register",{
        userName:userName , email:email , password:password});
    console.log(response)
    return response.data;
        
    } catch (error) {
        throw error
    }
}


export  {
    loginUser , registerUser
}