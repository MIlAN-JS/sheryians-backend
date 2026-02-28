import { useContext, useEffect } from "react"
import { PostContext } from "../context/postContext"
import { getAllPosts, likePost, unlikePost } from "../services/post.api"



const usePost = ()=>{

   const {loading , setLoading , posts , setPosts, Blike , setBlike } = useContext(PostContext);


   const feedHandler = async()=>{
    try {
        setLoading(true)
        const posts = await getAllPosts()
         setPosts(posts.posts)
         
        
    } catch (error) {

        throw error
        
    }finally{
        setLoading(false)
    }
   }

   const likeHandler = async(postId)=>{

    setLoading(true)
     setBlike(true)
     const isLiked = await likePost(postId)
     console.log(isLiked)
    setLoading(false)
     

   }


   const unlikeHandler = async(postId)=>{

    setLoading(true)
     const isLiked = await unlikePost(postId)
    setUnlike(Boolean(isLiked))
    setLoading(false)
     

   }


   


   return {loading , posts, feedHandler , likeHandler , unlikeHandler}



}


export default usePost;