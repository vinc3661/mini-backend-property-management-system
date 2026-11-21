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

const getTenants=async(landlordId)=>{

    const query=`
    SELECT *
    FROM tenants
    WHERE landlord_Id =$1
    RETURN *
    
    `;
const values=[landlordId];
    

    const results=await pool.query(query,values);
    return results.rows[0];


}

const getTenantBId=async(id,landlordId)=>{

const query=`
SELECT *
FROM tenants
WHERE lanlord_id=$1,
AND ID=$2
`;

const values=[landlordId,id];
const results=await pool.query(query,values);
return rows;

}

const updateTenant=async(id,landlordId,tenant_name,email)=>{
const query=`
SELECT *
FROM tenants
WHERE id=$1,
AND landlord_id=$2,
AND COALESCE(tenant_name,$3),
AND COALESCE(email,$4)

`;
const values=[
    id,
    landlordId,
    tenant_name,
    email
];

const results=await pool.query(query,values);
return results.rows;
}

const deleteTenant=async(id,landlordId,tenant_name,
    email
)=>{

const query=`
SELECT *
FROM tenants
WHERE id=$1,
AND landlord_id=$2,
AND tenant_name,
AND email
`;

const values=[

    id,
    landlordId,
    tenant_name,
    email
];

const results=await pool.query(query,values);
return results.rows;
}