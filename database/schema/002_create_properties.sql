CREATE TABLE properties(
    id UUID PRIMARY KEY DEFAULT gen_random_uid(),
     property_name VARCHAR(150) NOT NULL,
     address VARCHAR(150) NOT NULL,
     created_at TIMESTAMPTZ DEFAULT NOW(),
     updated_at TIMESTAMPTZ DEFAULT NOW(),
     landlord_id NOT NULL,
     CONSTRAINT fk_properties_landlord
     FOREIGN KEY(landlord_id)
     REFERENCES users(id)
);
