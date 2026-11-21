CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(200) NOT NULL,
    password_hash TEXT NOT NULL,
    role VARCHAR(20) NOT NULL,
    CHECK (role IN ('caretaker', 'landlord')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()

);

CREATE CONSTRAINT UNIQUE INDEX users_email_lower_unique
ON users(LOWER(email));

ALTER TABLE users
ADD CONSTRAINT users_email_not_blank
CHECK(TRIM(email)<> '');