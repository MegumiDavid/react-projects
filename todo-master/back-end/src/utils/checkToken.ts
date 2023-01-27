import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export default function checkToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'access denied' });
    }

    try {
        const secreat: any = process.env.SECREAT;
        jwt.verify(token, secreat);
        next();
    } catch(err: any) {
        res.status(400).json({ message: err.message });
    }
}