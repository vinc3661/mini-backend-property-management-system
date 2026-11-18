CREATE TABLES users(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(200) NOT NULL,
    password_hash VARCHAR(150)NOT NULL,
    role VARCHAR(20)NOT NULL
    CHECK (role IN('caretaker','landlord')),

created_at TIMESTAMPZ NOT NULL DEFAULT NOW(),
updated_at TIMESTAMPZ NOT NULL DEFAULT NOW(),

);

CREATE UNIQUE INDEX users_email_lower_unique_idx
ON users(LOWER(email));