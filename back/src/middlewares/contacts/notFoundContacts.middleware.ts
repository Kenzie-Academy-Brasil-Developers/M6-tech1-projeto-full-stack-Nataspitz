import { NextFunction, Request, Response } from "express";
import { contactsRepo } from "../../repositories";
import { AppError } from "../../errors/AppError";


export const notFoundContact = async (req: Request, res: Response, next: NextFunction) =>{
    const { id } = req.params

    const contact = await contactsRepo.findOneBy({ id })

    if(!contact) throw new AppError("Contact not found", 404)

    res.locals = {...res.locals, contact}
    return next()
}