
import { Request, Response, NextFunction } from "express";

import { registerUser as registerUserService } from "../services/auth.service";
import { loginUser as loginUserService } from "../services/auth.service";
type RegisterBody = {
    name: string;
    email: string;
    password: string;
};

export async function registerUser(
    req: Request<{}, {}, RegisterBody>,
    res: Response,
    next: NextFunction
): Promise<void> {
    try {

        console.log("Incoming request:", req.body);
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.status(400).json({
                success: false,
                message: "Name, email and password are required",
            });
            return;
        }

        const user = await registerUserService({
            name,
            email,
            password,
        });

        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user,
        });
    } catch (error) {
        next(error);
    }
}

export async function loginUser(req:Request,res:Response,next:NextFunction):Promise<void>{
try{

const {email,password}=req.body;
if(!email||!password){
    res.status(400).json({
        success:false,
        message:"Email and password are required"
    });
    return;
}

const user=await loginUserService({
    email,
    password
});

res.status(200).json({
    success:true,
    message:"Login successful",
    data:user
});
} catch (error) {
    next(error);
}
}