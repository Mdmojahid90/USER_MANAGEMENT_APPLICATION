const adminMiddleware = async(req,res,next)=>{
  try{
    const isAdminRole = req.user
    if(isAdminRole.isAdmin){
      next()
    }else{
      return res.status(400).json("User is Not Admin")
    }
  }catch(err){
    return res.status(400).json("Admin Middleware Got Some Issue")
  }
}

module.exports = adminMiddleware