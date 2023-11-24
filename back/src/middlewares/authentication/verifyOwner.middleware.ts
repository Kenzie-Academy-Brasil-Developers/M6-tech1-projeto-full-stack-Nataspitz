import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../errors/AppError';


export const verifyOwner = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const { sub } = res.locals.decoded

    if (id !== sub) {
        throw new AppError("Not authorized", 403)
    }

    return next()
}