import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { emailContactRepo } from "../../repositories";


export const emailExists = async (req: Request, res: Response, next: NextFunction) =>{
    const { email } = req.body
    
    const emailContact = await emailContactRepo.findOne({
        where: {
            email
        }
    })

    if(emailContact) {
        throw new AppError("Email already registered", 409)
    }

    return next()
}