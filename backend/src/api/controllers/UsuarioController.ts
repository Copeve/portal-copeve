import { Request, Response } from 'express';
import {UsuariosServices} from '../services';
import jwt, {JwtPayload} from 'jsonwebtoken';
const usuariosServices = new UsuariosServices();
const SECRET = 'segredoCopeve';

class UsuarioController{
    static async confereLogin(req: Request, res: Response): Promise<void> {
        try {
            const dados= req.body;
            const usuario=await usuariosServices.pegaRegistroUnico({login: dados.login, senha: dados.senha});
            console.log(usuario);
            if(usuario === null){
                res.status(401).json({message: 'login ou senha incorretos'});
            }else{
                const token = jwt.sign({userId: usuario.id}, SECRET, {expiresIn:300});
                res.status(200).json({auth:true, token});
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async confereToken(req: Request, res: Response): Promise<void> {
        const token= req.headers['x-access-token'];
        if(!token){
            res.status(401).json({message:'Token não fornecido'});
        }
        try {
            if (typeof token === 'string'){
                const resultado = jwt.verify(token, SECRET) as JwtPayload;
                res.status(200).json(resultado);
            }
        } catch (error) {
            res.status(401).json({message: 'token inválido'});
        }
    }
}

export default UsuarioController;