import { Request, Response, NextFunction } from "express";
import { contactsRepo } from "../../repositories";
import { AppError } from "../../errors/AppError";


export const phoneExists = async (req: Request, res: Response, next: NextFunction) => {
    const { phone } = req.body

    const clientPhone = await contactsRepo.findOneBy({ phone: phone })

    if (clientPhone) {
        throw new AppError("Phone already registered", 409)
    }

    return next()
}