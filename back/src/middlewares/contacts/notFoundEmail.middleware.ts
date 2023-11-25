import { Request, Response, NextFunction } from "express";
import { emailContactRepo } from "../../repositories";
import { AppError } from "../../errors/AppError";


export const notFoundEmail = async (req: Request, res: Response, next: NextFunction) => {
    
    const email = await emailContactRepo.findOneBy({
        id: req.params.id
    })

    if (!email) {
        throw new AppError("Email not found", 404)
    }

    res.locals = {...res.locals, email}
    return next()
}