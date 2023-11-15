import { NextFunction, Request, Response } from "express";
import { AppError } from "./AppError";
import { z } from "zod";
import { JsonWebTokenError } from "jsonwebtoken";

export const handleErrors  = (err: unknown, req: Request, res: Response, next: NextFunction) =>{
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({message: err.message})
    }

    if (err instanceof z.ZodError) {
        return res.status(400).json({ message: err.errors});
    }

    if (err instanceof JsonWebTokenError) {
        return res.status(401).json({ message: err.message });
    }

    console.error(err)
    return res.status(500).json({error: "Internal Server Error "})
}