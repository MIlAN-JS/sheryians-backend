import { useAuthContext   } from "../context/AuthContext";
import { loginUser, registerUser } from "../services/auth.services";

// to talk with api




 function useAuth(){


    const {user , setUser , loading , setLoading} = useAuthContext()


    const handleLogin = async(email , password)=>{

    try {

    
        setLoading(true)
        const response = await loginUser(email , password)
        setUser(response.userData)
        setLoading(false)

    

} catch (error) {

    throw error
    
}finally{
    setLoading(false)
}




        

    }
    
    const handleRegister = async (email , password , userName)=>{

        try {

            console.log(email , password , userName)

            setLoading(true)
            const response = await registerUser(email , password , userName)
            setUser(response.userData)
            setLoading(false)

            
        } catch (error) {

            throw error
            
        }
        finally{
            setLoading(false)
        }

    }



        return {
            user ,loading ,handleLogin , handleRegister
        }



}





export default useAuth;