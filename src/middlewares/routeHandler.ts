import { Request, Response, NextFunction } from "express";

const routeHandler = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({error: 'Not Found'})
    
}

export default routeHandler;