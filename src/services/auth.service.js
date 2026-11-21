const bcrypt = require("bcryptjs");
const pool = require("../config/db");
const hashPassword = async (password) => {
    const saltRounds = 12;

    const hash = await bcrypt.hash(password, saltRounds);

    return hash;
};

const verifyPassword = async (password, storedHash) => {
    const isValid = await bcrypt.compare(password, storedHash);

    return isValid;
};


const registerUser = async ({ full_name, email, password }) => {

    
    const normalizedEmail = email.trim().toLowerCase();

    
    const passwordHash = await hashPassword(password);

    
    const query = `
        INSERT INTO users (
            full_name,
            email,
            password_hash,
            role
        )
        VALUES ($1, $2, $3, $4)
        RETURNING id, full_name, email, role, created_at;
    `;

    
    const values = [
        full_name,
        normalizedEmail,
        passwordHash,
        "landlord"
    ];

    
    const results = await pool.query(query, values);

    
    return results.rows[0];
};

module.exports = {
    hashPassword,
    verifyPassword,
    registerUser
};