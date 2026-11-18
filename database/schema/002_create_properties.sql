
CREATE TABLE properties (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    property_name VARCHAR(150) NOT NULL,

    address TEXT NOT NULL,

    landlord_id UUID NOT NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_properties_landlord
        FOREIGN KEY (landlord_id)
        REFERENCES users(id)
);
