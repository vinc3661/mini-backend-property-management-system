const createProperty=async(req,res)=>{
try{
const {property_name,address}=req.body;

if(!property_name,address){
    return res.status(400).json(
        {
            success:false,
            message:"property name and address are required"
        });

        const property=await propertyService.createProperty(
            {
                property_name,
                address,
                landlordId_id:req.user.id
            });
            return res.status(201).json(
                {
                    success:true,
                    message:"property created successfully"
                }
            );
}
}catch(error){
    console.error("failed to create property");
}
}


const getProperty=async(req,res)=>{

    try{
        const {property_name,address}=req.body;
        if(!property_name,address){
            return res.status(400).json(
                {
                    success:false,
                    message:"property created successfully",
                    data:property
                });


    }

    const property=await propertyService.getProperty({
        property_name,
        address
    });
    return res.status(
        {
            success:true,
            message:"property retrived",
            data:property
        });
    }catch(error){
        console.error("failed to get property");
    }
}