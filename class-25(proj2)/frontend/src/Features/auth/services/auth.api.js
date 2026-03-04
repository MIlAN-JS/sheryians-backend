import axios from "axios"


const api = axios.create({
    baseURL : "http://localhost:3000/api/auth",
    withCredentials: true
})




const loginUserService = async({email , password})=>{
    try {

        const response = await api.post("/login", {email, password})
        return response.data
        
    } catch (error) {

        console.log("cannot login user", error)
        
    }
}
const getUserService = async()=>{
    try {

        const response = await api.get("/get-user")
        console.log(response)
        return response.data
        
    } catch (error) {

        console.log("cannot get user", error)
        
    }
}

 


export {
    loginUserService,
    getUserService
}