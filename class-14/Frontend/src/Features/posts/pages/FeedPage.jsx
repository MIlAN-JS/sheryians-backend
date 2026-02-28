import React, { useEffect } from 'react'
import { TfiLayoutMenuSeparated } from "react-icons/tfi";
import { FcLike } from "react-icons/fc";

import "../styles/feedPage.scss"
import usePost from "../hooks/usePost"
import Post from '../components/Post';
const FeedPage = () => {

  const {feedHandler, posts , loading, like , } = usePost()


  console.log(like)

  useEffect(() => {
    
    feedHandler()
  
    
  }, [])
  
  // console.log(posts[0]._id)


  return (
     loading ?  <h1>Loading...</h1> : 
     <section className='feed-container'>
          
           {
            posts.map((post)=>{
              return <Post 
              caption={post.caption}
              // userName = {post.userId.userName}
               isLiked = {post.isLiked}
               postId ={post._id}
              imgLink ={post.imgLink}  />
             
            })
           }

     </section>
  )
}

export default FeedPage