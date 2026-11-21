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


const registerUser=async ({full_name,email,password})=>{

const query=`
INSERT INTO users(
$1,
$2,
$3
)
RETURNINGS id,full_name.role,created_at,email;
`;
const passwordHash = await hashPassword(password);
const values=[
    full_name,
    email,
    password,
    
    passwordHash
];

const results=await pool.query(query,values);
return results.rows[0];

}


module.exports = {
    hashPassword,
    verifyPassword,
    registerUser,
};