const {pool}=require(".../config/db.js");

const createTenant=async(tenant_name,email)=>{

const query=`
INSERT INTO tenants(
tenant_name,
email
)
VALUES($1,$2)
RETERN *
`;
const values=[
    tenant_name,
    email
];

const results=await pool.query(query,values);
return results.rows[0];


}