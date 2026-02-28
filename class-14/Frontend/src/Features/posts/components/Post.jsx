import React from 'react'
import { AiFillLike } from "react-icons/ai";
import usePost from '../hooks/usePost';

const Post = ({caption , imgLink , isLiked , postId}) => {


  const {likeHandler , unlikeHandler ,Blike } = usePost()


  const likePost = async(postId)=>{

      await likeHandler(postId);

    
  }
  const unlikePost = async(postId)=>{
      await likeHandler(postId)
  }

  return (
       <div className="post-container">
                 
                  <div className="logo">

                    <img src="https://i.pinimg.com/1200x/72/68/d3/7268d399f8b95b4359d580a1026af5c0.jpg" alt="" className='user-img' />

                    <h2>UserName</h2>

                  </div>

                  <div className="post-img">
                    <img src={imgLink}alt="" />
                  </div>

                  <i
                  onClick={()=>{
                    isLiked ? unlikePost(postId) : likePost(postId)
                  }}
                  className={`like-btn ${Blike ? `liked` : `unliked`} ` }><AiFillLike /></i>

                  <h2 className="caption">username : {caption}</h2>
           </div>
  )
}

export default Post