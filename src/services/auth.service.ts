import {pool} from "../config/db"
import type{User} from "../types/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function registerUser({name,email,password}:{name:string,email:string,password:string}):Promise<User>{
const saltRounds=12;
const existingUser=await pool.query(
    `SELECT id FROM users WHERE email=$1`,
    [email]
);

if(existingUser.rows.length>0){
    throw new Error("email already exists");
}
    const hashPassword=await bcrypt.hash(password,saltRounds);
    


const results=await pool.query<User>(
`
INSERT INTO users(
name,
email,
password

)
VALUES($1,$2,$3)
RETURNING id,name,email,created_at
`,
[name,email,hashPassword]
);
return results.rows[0];

}

export async function loginUser({
    email,
    password,
}: {
    email: string;
    password: string;
}): Promise<{
    user: Omit<User, "password">;
    token: string;
}> {

    
    const results = await pool.query<User & { password: string }>(
        `
        SELECT id, name, email, password, created_at
        FROM users
        WHERE email = $1
        `,
        [email]
    );

    const user = results.rows[0];

    
    if (!user) {
        throw new Error("Invalid email or password");
    }

    
    const isPasswordCorrect = await bcrypt.compare(
        password,
        user.password
    );

    if (!isPasswordCorrect) {
        throw new Error("Invalid email or password");
    }

    
    const { password: _, ...safeUser } = user;
const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
    throw new Error("JWT_SECRET is not configured");
}

const payload = {
    id: user.id,
    email: user.email,
};

const token = jwt.sign(
    payload,
    jwtSecret,
    {
        expiresIn: "1d",
    }
);



    return {user:safeUser,
    token
    }
}
