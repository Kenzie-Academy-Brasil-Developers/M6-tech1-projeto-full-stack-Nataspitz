import { NextFunction, Request, Response } from "express";
import { clientRepo } from "../../repositories";
import { AppError } from "../../errors/AppError";


export const emailExists = async (req: Request, res: Response, next: NextFunction) =>{
    const { email } = req.body

    const contact = await clientRepo.findOneBy({ email })

    if(contact) {
        throw new AppError("Email already registered", 409)
    }

    return 
}