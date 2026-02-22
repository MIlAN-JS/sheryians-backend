
const followModel = require("../models/follow.model")
const userModel = require("../models/user.model")



const followController = async (req , res)=>{



    try {

    const followerId = req.user.id
    const {followeeId} = req.params
    
 




    // we have to do a lot checks as a backend engineer because client can send anything like when we create a follow feature


            // check if followee exists or not 

        const isFolloweeExist = await userModel.findById(followeeId);

        console.log(isFolloweeExist)
        
        if(!isFolloweeExist){
            return res.status(400).json({
                message : "followee doesnt exist sorry",
                success : false
            })
        }








    // user cannot follow himself so follower and followee must be unique

     if (followerId === followeeId) {
        return res.status(404).json({
            message : "user cannot follow itself",
            success : false
        })
     }




    // user cannot follow followee more than once 

    const isAlreadyFollowed = await followModel.findOne({follower : followerId , followe : followeeId});

    if(isAlreadyFollowed){
        return res.status(400).json({
            message : "Already followed so you cannot follow twice",
            success : false
        })
    }



        console.log(followeeId)


        // creating new follower

       
        const newFollow = await followModel.create({
            follower : followerId, 
            followe : followeeId
        })

        res.status(201).json({
            message : "followed successfully",
            success : true
        })


        
    } catch (error) {
            console.log("cannot follow user",error)
        res.status(404).json({
            message : "cannot follow user", 
            success: false,
           
        })

        
    }


}


const unfollowController = async (req , res)=>{
    try {
        const followerId = req.user.id
        const {followeeId}  = req.params

       // check if followee exists

       const isFolloweeExist = await userModel.findById(followeeId)
       if(!isFolloweeExist){
        res.status().json({
            message : "followee doesnt exits",
            success : false
        })
       }


       // user cannot unfollow itself

       if(followerId === followeeId) { 
        return res.status(400).status({
            message : "cannot unfollow yourself", 
            success: false
        })
       }

       //unfollow user

        const unfollowing = await followModel.findOneAndDelete({ 
             follower : followerId,
            followe : followeeId
        })

        res.status(200).json({
            message : "unfollowed success",
            status : true
        })
        
    } catch (error) {

        console.log("cannot unfollow user", error)

        res.status(400).json({
            message : "cannot unfollow user",
            status : false
        })
        
    }
}


const statusController = async(req, res)=>{


    const {followResponse , id} = req.body
    try {

        if(followResponse === "accepted" || followResponse == true){

            const updatedFollow = await followModel.findByIdAndUpdate(id , {
                status : "accepted"
            })

            res.status(200).json({
                message : "follow accepted",
                success : true
            })

         


        }
        else if(followResponse === "rejected" || followResponse == false){
              
            const rejectFollow = await followModel.findByIdAndUpdate(id , {
                status : "rejected"
            })

            res.status(200).json({
                message : "follow rejected",
                success: true
            })
        }





        
    } catch (error) {

        console.log(error , "cannot change status")
        res.status(400).json({
            message : "something went wrong with following lol  "
        })
        
    }
}


module.exports = {
    followController, 
    unfollowController, 
    statusController
}