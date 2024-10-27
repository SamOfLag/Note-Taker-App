import { error } from "console";
import { Request, Response, NextFunction } from "express";

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction): void => {
    console.error(err.stack)

    if (err.name === 'ValidationError') {
        res.status(400).json({
            error: 'Validation Error',
            details: err.message
        })
    }
    res.status(500).json({error: 'Internal Server Error'})
}

export default errorHandler;