import{Request,Response,NextFunction} from "express";
import{createTenant as createTenantService, } from "../services/tenant.service";
import {updateTenant as updateTenantService} from "../services/tenant.service";
import {getTenants as getTenantsService} from "../services/tenant.service";
export async function createTenant(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const { tenant_name, email, property_id } = req.body;
        if (!tenant_name || !email || !property_id) {
            return res.status(400).json({
                success: false,
                message: "tenant_name,email and property_id required"
            });
        }

        const landlordId = req.user?.id;
        if (!landlordId) {
            return res.status(400).json({
                success: false,
                message: "landlord_id needed"
            });
        }

        const tenant = await createTenantService(landlordId, {
            tenant_name,
            email,
            property_id
        });

        return res.status(201).json({
            success: true,
            data:tenant
        });
    } catch (error) {
        next(error);
    }
}

export async function getTenants(req:Request,res:Response,next:NextFunction){
try{
const landlordId=req.user?.id;
if(!landlordId){
   return res.status(400).json({
success:false,
message:"landlordId required"

   });
}

const tenant=await getTenantsService(landlordId)
return res.status(200).json({
success:true,
message:"tenants retrieved",
data:tenant

});

}catch(error){
    next(error);

}


}

export  async function updateTenant(req:Request,res:Response,next:NextFunction){
try{
const {tenant_name,email,property_id}=req.body;
if(!tenant_name||!email||!property_id){
    return res.status(400).json({
        success:true,
        message:"tenantName,email, property_id required"
    });
}
const landlordId = req.user?.id;

if (!landlordId) {
  return res.status(401).json({
    success: false,
    message: "Authentication required"
  });
}
const id=req.params.id;
if(typeof id !== "string" || !id){
    return res.status(400).json({
        success:false,
        message:"id required"
    });
}
const tenant=await updateTenantService({tenant_name,email,property_id},
id,landlordId);

return res.status(200).json({
    success:true,
    message:"tenant updated",
    data:tenant
});
}catch(error){
    next(error);
}

}
