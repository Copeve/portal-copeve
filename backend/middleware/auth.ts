import {Request, Response, NextFunction} from 'express';
import * as jwt from 'jsonwebtoken';
const SECRET = '9f897b45f749a10f27c07d2a98798758';

export default async function auth(req:Request, res:Response, next:NextFunction){
    const authHeader=req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({message:'thoken is required'});
    }
    const[ ,token]=authHeader.split(' ');
    try {
        await jwt.verify(token, SECRET);
        next();
    } catch (error) {
        res.status(401).json({message:'token invalid'});
    }
}


