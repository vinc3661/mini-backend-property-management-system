import {pool} from "../config/db.js";
import { CreateTenantInput,UpdateTenantInput, Tenant } from "../types/tenant.type.js";

export async function createTenant(landlord_id:string,tenantData:CreateTenantInput):Promise<Tenant|undefined>{

const {tenant_name,email,property_id}=tenantData;

const results=await pool.query<Tenant>(
`
INSERT INTO tenants(
tenant_name,
email,
property_id,
landlord_id
)
VALUES($1,$2,$3,$4)
RETURNING *`,
[tenant_name,email,property_id,landlord_id]
);

return results.rows[0];
}

export async function getTenants(landlord_id:string):Promise<Tenant[]>{

    const results=await pool.query<Tenant>(
`   
SELECT *
FROM tenants
WHERE landlord_id=$1
`,
[landlord_id]
);

return  results.rows
}

export async function updateTenant(tenantData:UpdateTenantInput,id:string,landlord_id:string):Promise<Tenant|undefined>{

const {tenant_name,email,property_id}=tenantData;

const results=await pool.query<Tenant>(
`
UPDATE tenants
SET
tenant_name = COALESCE($1,tenant_name),
email = COALESCE($2,email),
property_id= COALESCE($3,property_id)
WHERE id=$4 AND 
landlord_id=$5
update_at=NOW()
RETERNING *
`,
[tenant_name,email,property_id,id,landlord_id]
);
return results.rows[0];
}


export async function deleteTenant(id:string,landlord_id:string,):Promise<Tenant|undefined>{

    const results=await pool.query<Tenant>(
`
DELETE FROM tenants
WHERE 
id=$1 AND
landlord_id=$2
RETURNING*
`,
[id,landlord_id]
);

return results.rows[0];




}



