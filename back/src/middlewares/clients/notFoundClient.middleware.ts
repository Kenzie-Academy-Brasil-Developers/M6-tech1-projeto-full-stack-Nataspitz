import { NextFunction, Request, Response } from "express";
import { clientRepo } from "../../repositories";
import { AppError } from "../../errors/AppError";


export const notFoundClient = async (req: Request, res: Response, next: NextFunction) =>{
    const { id } = req.params

    const client = await clientRepo.findOneBy({ id })
        
    if(!client) throw new AppError("Client not found", 404)

    res.locals = {...res.locals, client}
    return next()
}