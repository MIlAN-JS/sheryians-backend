import axios from "axios"

const postApi = axios.create({
    baseURL : "http://localhost:3000/api/posts",
    withCredentials : true
})


const getAllPosts = async()=>{
    try {

        const posts = await postApi.get("/get-feed");
        return posts.data

        
    } catch (error) {
        throw error
        
    }
}


const likePost = async(postId)=>{
    try {

        const response = await postApi.post("/like-post", {postId})
        return response.data 
        
    } catch (error) {

        console.log(error , "cannot like post")
        
    }
}

const unlikePost = async(postId)=>{
    try {
        
        const response = await postApi.post("/unlike-post",{postId})
        return response.data
        
    } catch (error) {
        console.log("cannot unlike post", error)
    }
}


export {
    getAllPosts,
    likePost,
    unlikePost
}