const express=require("express");
const router=express.Router();

const {
    getProperties,
    getPropertiesId,
    updateProperty,
    deletePropery,
    createProperty,
}=require("../controllers/property.controller");

router.post("/",createProperty);
router.get("/",getProperties);
router.get("/:id",getPropertiesId);
router.patch("/:id",updateProperty);
router.delete("/:id",deletePropery);


module.exports=router;



















exports.module=router