import { Request, Response, NextFunction } from "express";
import { contactsRepo } from "../../repositories";
import { AppError } from "../../errors/AppError";


export const phoneContactExists = async (req: Request, res: Response, next: NextFunction) => {
    const { phone } = req.body

    const phoneContact = await contactsRepo.findOneBy({ phone: phone })

    if (phoneContact) {
        throw new AppError("Phone already registered", 409)
    }

    return next()
}