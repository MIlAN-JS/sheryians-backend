import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:5000/api/",
    withCredentials : true
})



const getUserApi =  async()=>{

const response = await api.get("/get-user")

return response.data


}

export {
    getUserApi
}