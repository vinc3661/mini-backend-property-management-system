import {createPayment as paymentService} from "../services/payment.service";
import {Request,Response,NextFunction}from "express";


export async function createPayment(req:Request,res:Response,next:NextFunction):Promise<void>{
try{

const{phoneNumber,amount,studentId}=req.body;
if(!phoneNumber||!amount){
    res.status(400).json({
        success:false,
        message:"phoneNumber,studentId and amount required"
    });
return;
}

const Payment=await paymentService({phoneNumber,amount,studentId});
res.status(201).json({
    success:true,
    message:"payment craeted",
    data:Payment
})

}catch(error){
    next(error);
}




}