import { createContext, useState } from "react";



export const PostContext = createContext()



const PostProviderContext = ({children})=>{

    const [loading , setLoading] = useState(false)
    const [posts  , setPosts] = useState([])
  const [Blike , setBlike] = useState(null)

    
   



    return (
        <PostContext.Provider value={{loading, setLoading, posts, setPosts  , setBlike , Blike  }}>

            {children}

        </PostContext.Provider>
    )
}

export default PostProviderContext;