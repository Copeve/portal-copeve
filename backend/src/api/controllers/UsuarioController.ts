import { Request, Response } from 'express';
import {UsuariosServices} from '../services';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
const usuariosServices = new UsuariosServices();
const SECRET = '9f897b45f749a10f27c07d2a98798758';

class UsuarioController{
    static async confereLogin(req: Request, res: Response): Promise<void> {
        try {
            const {usuario, senha}=req.body;
            const user = await usuariosServices.pegaRegistroUnico({usuario:usuario});
            

            if(user !==null){
                if(await bcrypt.compare(senha, user.senha)){
                    const token = jwt.sign({id: user.id}, SECRET, {expiresIn:'1d'});

                    const data = {
                        id:user.id, 
                        name:user.usuario, 
                        token: token
                    };
                    res.status(200).json(data);
                }else{
                    res.status(401).json({message: 'user not found'});
                }

            }else{

                res.status(401).json({message: 'user not found'});
            }


        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async salvaUsuario(req: Request, res: Response): Promise<void> {
        try {
            const {usuario, senha, tipo_usuario, nome} = req.body;
            const passwordHash = await bcrypt.hash(senha, 0);
            const user=usuariosServices.adicionaRegistro({usuario:usuario, senha:passwordHash, tipo_usuario: tipo_usuario, nome:nome});
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }


    static confereToken(req: Request, res: Response) {
        const token= req.headers['x-access-token'];
        if(!token){
            res.status(401).json({message:'Token não fornecido'});
        }
        try {
            if (typeof token === 'string'){
                //const resultado = jwt.verify(token, SECRET) as JwtPayload;
                res.status(200).json({autenticado:true});
            }
        } catch (error) {
            res.status(401).json({autenticado: false});
        }
    }
}

export default UsuarioController;