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

const results=pool.query(query,values);

return results.row[0];










}