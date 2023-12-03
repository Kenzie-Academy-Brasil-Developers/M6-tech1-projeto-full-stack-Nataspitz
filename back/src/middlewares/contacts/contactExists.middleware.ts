import { Request, Response, NextFunction } from "express";
import { contactsRepo } from "../../repositories";
import { AppError } from "../../errors/AppError";



export const contactExists = async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body

    const contact = await contactsRepo.findOneBy({ name })
    if(contact) throw new AppError("Contact already exists", 404)
    return next()
}