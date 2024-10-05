const User = require("../models/user-model")

const getAllUsers = async(req,res)=>{
  try{
      const users = await User.find().select({password:0})
      return res.status(200).json(users)
  }catch(err){
    return res.status(400).json({message:"Cannot Fetch All Users Data"})
  }
}


// Delete User By Id
const deleteUserById = async(req,res)=>{
 try{
    const id = req.params.id;
    if(!id){
      return console.log("Did Not Get User Id")
    }
    const deletedUser = await User.deleteOne({_id:id})
   return res.status(200).json({message:"User Deleted Successfully",deletedUser})
 }catch(err){
  return res.status(400).json({message:"User Not Deleted"})
 }
}

//  Get user by id logic
const getUserById =async(req,res)=>{
  try{
    const id = req.params.id;
    if(!id){
      return console.log("Did Not Get User Id")
    }
    const userData = await User.findOne({_id:id}).select({password:0})
    return res.status(200).json(userData)
  }catch(err){
    return res.status(400).json({message: "Did Not Get User Data"})
  }
}

//Update User By Id Logic

const updateUserById = async(req,res)=>{
  try{
    const id = req.params.id;
    const updateUserData = req.body;
    const updatedUser= await User.updateOne({_id:id},{$set:updateUserData})

    return res.status(200).json({message:"User Updated Successfully",updatedUser})
  }catch(err){
    return res.status(400).json({message:"User Not Updated"})
  }
}







module.exports = {getAllUsers,deleteUserById,getUserById,updateUserById}