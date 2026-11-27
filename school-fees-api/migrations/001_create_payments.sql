CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  student_id UUID NOT NULL,

  amount NUMERIC(10, 2) NOT NULL,

  phone_number VARCHAR(20) NOT NULL,

  status VARCHAR(20) DEFAULT 'pending',

  provider_reference VARCHAR(100) UNIQUE,

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);

 CONSTRAINT fk_students_id
FOREIGN KEY(students_id)
REFENCES students(id)