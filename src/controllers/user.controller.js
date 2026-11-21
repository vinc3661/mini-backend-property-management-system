const authService=require("../services/auth.service");
const registerUser=async(req,res,next)=>{
try{
const {full_name,email,password,}=req.body;
if(!full_name||email||password){
    return res.status(400).json({
        success:false,
        message:"full_name,email and password required"
    });
}
const user=await authService.registerUser();
return res.status(200).json({
    success:true,
    message:"user registered",
    data:user
});

}catch(error){
    next(error);
}
}

exports.modules=registerUser;