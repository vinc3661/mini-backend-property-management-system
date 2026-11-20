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
    {landlordID}
)=>{

const query=` 
SELECT*
FROM properties
WHERE landlord_id=$1
`;

const values=[lanlordId];
const results=await pool.query(query,values);
return results.rows

}