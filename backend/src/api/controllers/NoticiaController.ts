import { Request, Response } from 'express';
import {NoticiasServices} from '../services';
const noticiasServices= new NoticiasServices();

class NoticiasController {
    static async pegaTodasAsNoticias(req: Request, res: Response): Promise<void> {
        try {
            const todosOsConcursos: object[] = await noticiasServices.pegaTodosOsRegistros();
            res.status(200).json(todosOsConcursos);
        } catch (error) {
            
            res.status(500).json(error);
        }
    }
    static async pegaNoticiaPorId(req: Request, res: Response):Promise<void> {
        const {idNoticia}=req.params;
        try {
            const noticia = await noticiasServices.pegaRegistroUnico({id: idNoticia});
            res.status(200).json(noticia);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async pegaNoticiasEmDestaque(req: Request, res: Response): Promise<void> {
        try {
            const todosOsConcursos: object[] = await noticiasServices.pegaRegistrosComCondicao({destaque:true});
            res.status(200).json(todosOsConcursos);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export { NoticiasController };