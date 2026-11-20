const pool=require("../config/db");

const createProperty=async(
    {
        property_name,
        address,
        lanlordId
    }
)=>{


const query=`
INSERT INTO properties(
property_name,
address,
lanlordId)
VALUES($1,$2,$3)
RETURNING *
`;

const values=[
    property_name,
    address,
    lanlordId
];

const results=await pool.query(query,values);

return results.row[0];

}

const getProperties=async(
    {landlordId}
)=>{

const query=` 
SELECT*
FROM properties
WHERE landlord_id=$1
`;

const values=[landlordId];
const results=await pool.query(query,values);
return results.rows

};


const getPropertyById=async({
    id,
    landlordId
})=>{

const query=`
SELECT *
FROM properties
WHERE lanlord_id=$1
WHERE id=$1
`;

const values=[landlordId,id];
const results=await pool.query(query,values);
return results.rows;

};


const updateProperty=async({
    property_name,
    address,
    landlordId,
    id
})=>{

const query=`
SELECT *
FROM properties
WHERE property_name=$1,
address=$2,
landlord_id=$3
id=$4
`;
const values=[property_name,address,landlordId,id]

const results=await pool.query(query,values);
return results.row;
    
};



const deleteProperty=async(
    {
        id
    }
)=>{

const query=`
SELECT *
FROM properties
WHERE id=$1
`;

const values=[id];
const results=pool.query(query,values);
return results.row;

};

exports.module={
    createProperty,
    getPropertyById,
    deleteProperty,
    getProperties,
    updateProperty,
};