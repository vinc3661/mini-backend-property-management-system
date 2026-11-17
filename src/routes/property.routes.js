const express=require("express");
const router=express.Router();
const {createProperty}=require("../createProperty/property.controller");
router.POST("/",createProperty);
module.exports=router;