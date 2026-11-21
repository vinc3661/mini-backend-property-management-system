const express=require("express");
const router=express.Router();

const {createTenant,getTenants,getTenantsById,updateTenant,deleteTenant}=
require("../controllers/tenant.controller");

router.post("/",createTenant);
router.get("/",getTenantsById);
router.get("/",getTenants);
router.patch("/",updateTenant);
router.delete("/",deleteTenant);

exports.modules=router;