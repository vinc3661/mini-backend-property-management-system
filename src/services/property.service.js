const properties=[];

 function createPropertyService(propertyData){
      console.log("Received property:", propertyData);

properties.push(propertyData);
 console.log("Array after push:", properties)
return propertyData;
};

function getPropertyService(){
    return properties;
}
module.exports={createPropertyService,
getPropertyService};