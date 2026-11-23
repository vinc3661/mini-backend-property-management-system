CREATE TABLE tenants(
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
tenant_name VARCHAR(150) NOT NULL,
landlord_id NOT NULL,
email VARCHAR(200)NOT NULL,
creted_at TIMESTAMPTZ DEFAULT NOW(),

);
CREATE CONSTRAINT UNIQUE INDEX email_lower_unique_idx
ON tenats(LOWER(email));

CREATE CONSTRAINT UNIQUE INDEX fk_tenants_unique_idx
FOREIGN KEY (landlord_id)
REFERENCES users(id) 
 
 ALTER TABLE tenants
 ADD CONSTRAINT tenant_email_not_blunk
 CHECK(TRIM(<> ''));