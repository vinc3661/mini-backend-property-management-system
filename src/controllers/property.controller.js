const {createPropertyService}=require("../services/property.service");
const {getPropertyService}=require("../services/property.service");
const createProperty=(req,res)=>{
    
    const newProperty=createPropertyService(req.body);
    res.status(201).json(
        {
            message:"property created successfully",
            data:newProperty
        }
    );
}
const getProperty=(req,res)=>{
const allPropeties=getPropertyService(req.body);
res.status(200).json({
    message:"property retrived successfully",
    data:allPropeties
}
)
}
module.exports={createProperty,getProperty};