const tenantService=require("../service/tenant.service");

const createTenant=async(req,res,next)=>{
try{
const {tenant_name,email,}=req.body
const landlordId=req.user.id;
if(!tenant_name||!email){
    return res.status(400).json({
        success:false,
        message:"failed to create tenant"
    });
}

const tenant=await tenantService.createTenant(landlordId);
return res.status(201).json({
    success:true,
    message:"tenant created",
    data:tenant
});

}catch(error){
    next(error);
}
}
const getTenants=async(req,res,next)=>{

try{

const {tenant_name,email}=req.body;
const landlordId=req.user.id;
if(!tenant_name,email){
  return  res.status(400).json({
        success:false,
        message:"failed to get tenants"
    });
}
    const tenant=await tenantService.getTenants(landlordId);
    return res.status(200).json({
        success:true,
        message:"tenants retreived",
        data:tenant
    });


}catch(error){
    next(error);

}


}





const getTenantById=async(req,res,next)=>{
try{

const{id}=req.id.params;
const landlord=req.user.id;
const{tenant_name,email}=req.body;

if(!tenant_name||!email){
    return res.status(400).json({
        success:false,
        message:"failed to get tenatnt"
    });

    
}

    const tenant=await tenantService.getTenantById(id,landlord);
return res.status(200).json({
    success:true,
    message:"retreived tenant",
    data:tenant
});

}catch(error){
    next(error);


}

}

const updateTenant=async(req,res,next)=>{
    try{
const{id}=req.id.params;
const {landlordId}=req.user.id;
const{tenant_name,email}=req.body;
if(tenant_name,email){
    return res.status(400).json({
        success:false,
        message:"failed to update tenant"
    });
}
const tenant=await tenantService.updateTenant(id,landlordId);
    return res.status(200).json({
        success:true,
        message:"tenat updated",
        data:tenant
    });
    }catch(error){
        next(error);
}

}


const deleteTenant=async(req,res,next)=>{
try{
const{id}=req.id.params;
const {landlordId}=req.user.id;
const {tenant_name,email}=req.body;

if(!tenant_name,email){
    return res.status(400).json({
        success:false,
        message:"failed to delete tenant"
    });
}

const tenant=await tenantService.deleteTenant(id,landlordId);
return res.status(200).json({
success:true,
message:"tenant deleted",
data:tenant

});


}catch(error){
    next(error);
}




}



exports.modules={
    createTenant,
    getTenantById,
    getTenants,
    updateTenant,
    deleteTenant
}