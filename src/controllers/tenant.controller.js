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

}catch(error){
    next(error);
}

const getTenants=async(req,res,next)=>{

try{

const {tenant_name,email}=req.body;

if(!tenant_name,email){
  return  res.status(400).json({
        success:false,
        message:"failed to get tenants"
    });
}
    const tenant=await tenantService.getTenants();
    return res.status(200).json({
        success:true,
        message:"tenants retreived",
        data:tenant
    });


}catch(error){
    next(error);

}


}



};

const getTenantById=async(req,res,next)=>{
try{

const{id}=req.id.params;
const{tenant_name,email}=req.body;

if(!tenant_name||!email){
    return res.status(400).json({
        success:false,
        message:"failed to get tenatnt"
    });

    
}

    const tenant=await tenatService.getTenantById();
return res.status(200).json({
    success:true,
    message:"retreived tenant",
    data:tenant
});

}catch(error){
    next(error);


}

}


