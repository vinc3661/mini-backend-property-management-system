const tenatService=require("../service/tenant.service");

const createTenant=async(req,res,next)=>{
try{
const {tenant_name,email,}=req.body
if(!tenant_name||!email){
    return res.status(400).json({
        success:false,
        message:"failed to create tenant"
    });
}

const tenant=await tenatService.createTenant();
return res.status(201).json({
    success:true,
    message:"tenant created",
    data:tenant
});




}



}