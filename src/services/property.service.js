const pool=require("../config/db.js");
const createProperty=(
    property_name,
    address,
    lanlordId,

)=>{

const query=`
INSERT INTO properties(
property_name,
address,
lanlordId

)
VALUES(
$1,
$2,
$3
);

RETURNING *;

`;
const values=[
    property_name,
    address,
    lanlordId,
]
const pool=pool.query(query,values);
return results.row[0];
};
exports.module={
    createProperty
}